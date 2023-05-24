const dotenv = require('dotenv');
const express = require('express');
const http = require('http');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser')
const router = require('./routes/index');
const multer = require('multer')
const cors = require('cors')
const mongoose = require("mongoose");
const { name } = require('ejs');
const { type } = require('os');
// import products from './db';

dotenv.load();

const app = express();


//Connect to a database
const uri = 'mongodb://localhost:27017';
const dbName = 'ECommerceDev';

// Connect to MongoDB using Mongoose
mongoose.connect(`${uri}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a Mongoose Schema
const Product_Inventory = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productCategory: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productDesc: {
    type: String,
    required: true,
  },
  productFeatures: {
    type: [{"Feature1 " : String, "Feature2" : String, "Feature3" : String}],
    required: true,
  },
});

//Collection for storing details of all the available products
const products_available = new mongoose.Schema({
  productName : {
    type : String,
    required : true
  },
  productQty : {
    type : Number, 
    required : true
  },
  sellerName : {
    type : String, 
    required : true
  },
  status : {
    type : String,
    required : true
  }
})

//collection to store all the user purchases
const purchases = new mongoose.Schema({
  productName : {
    type : String, 
    required : true
  },
  price  : {
    type : Number,
    required : true
  },
  userName : {
    type : String,
    required : true
  },
  dateOfPurchase : {
    type : Date,
    required : true
  },
  paymentMethod : {
    type : String,
    required : true
  },
  status : {
    type : String,
    required : false
  }
})

//collection to store all the user details
const users = new mongoose.Schema({
  Name : {
    type : String, 
  },
  emailAddr : {
    type : String, 
    
  },
  phoneNumber : {
    type : Number, 
    
  },
  addressLine1 : {
    type : String, 
   
  },
  addressLine2 : {
    type : String, 
    
  },
  pincode : {
    type : Number, 
    
  },
  mobNo : {
    type : Number,  
  }
})

//collection to store the status of a particular order
const trk_status = new mongoose.Schema({
  order_id : {
    type : String,
    required : true
  },
  orderDate : {
    type : Date,
    required : true
  },
  destinationPin : {
    type : Number,
    required : true
  },
  destinationCity : {
    type : String,
    required : true
  }
})

//Collection to store the cart details
const cart_det = new mongoose.Schema({
  "userName" : {
    type : String, 
    required : true
  },
  "items" : [String],
  
})

//to store all items with their pricrs
const item_price = new mongoose.Schema({
  itemName : {
    type : String,
    required : true
  },

  itemPrice : {
    type : Number,
    required : true
  }
})





// Create a Mongoose Model
const products = mongoose.model('products', Product_Inventory);
const prods_available = mongoose.model('products_available', products_available)
const user_details = mongoose.model('user_details', users)
const all_orders = mongoose.model("user_orders", purchases)
const trackng_status = mongoose.model("order_tracking_status", trk_status)
const cart = mongoose.model("cart_details", cart_det)
const itemPrices = mongoose.model('item_prices', item_price)


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('uploads'));


const config = {
  authRequired: false,
  auth0Logout: true
};

const port = process.env.PORT || 3000;
if (!config.baseURL && !process.env.BASE_URL && process.env.PORT && process.env.NODE_ENV !== 'production') {
  config.baseURL = `http://localhost:${port}`;
}



//MY code
app.get('/data/:name', async (req, res) => {
  try {

    var catg;
    
    if(req.params.name == 'iphone' || req.params.name == 'oneplus 9'){
        catg = "mobiles"
        console.log("Foud mobiles")
        //req.params.name
    }

    var prod_name = req.body.itemName;
    const example = await products.find({"productCategory" : catg});
    if (!example) {
      return res.status(404).send('Document not found');
    }
    console.log(example)
    res.json(example)
    // res.redirect("/buynow/" + prod_name)
  } catch (err) {
    console.error('Failed to fetch document:', err);
    res.status(500).send('Failed to fetch document');
  }

  
});

//Route to update the cart of a user
app.put('/updatecart/:name/:addItem', async (req, res) => {
  try {
    // const example = await cart.find({"userName" : req.params.name});
    
    const example = await cart.findOneAndUpdate({"userName" : req.params.name}, {"$push" : {"items" : req.params.addItem}}, {new : true});
    
    if (!example) {
      //return res.status(404).send('Document not found');
      const example = await cart.insertMany({"userName" : req.params.name}, {"$push" : {"items" : req.params.addItem}}, {new : true});
      console.log("Added to new cart")
      // console.log(example)
      return res.json({"acknowledged" : true})

    }
    res.json({"acknowledged" : true});
  } catch (err) {
    console.error('Failed to update document:', err);
    res.status(500).send('Failed to update document');
  }
});

//route to send the cart details of a user
app.get("/getcart/", async function(req, res){
  try {
    const examples = await cart.find({"userName" : "Chandu"});
    console.log("[*] Sent cart information successfully.")
    res.json(examples);
  } catch (err) {
    console.error('Failed to fetch documents:', err);
    res.status(500).send('Failed to fetch documents');
  }
})

//route to send the item prices
app.get("/getprices:itemName", async function(req, res){
  try {
    const examples = await itemPrices.find({"itemName" : req.params.itemName});
    console.log("[*] Sent item price information successfully.")
    res.json(examples);
  } catch (err) {
    console.error('Failed to fetch documents:', err);
    res.status(500).send('Failed to fetch documents');
  }
})

//get user details
app.get("/getuserdet/:name", async function(req, res){
  try {
    const examples = await user_details.find({"Name" : req.params.name});
    console.log("[*] Sent user details information successfully.")
    res.json(examples);
  } catch (err) {
    console.error('Failed to fetch documents:', err);
    res.status(500).send('Failed to fetch documents');
  }
})


//Handling form data with multer
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
      console.log(file);
      cb(null , file.originalname );
  }
});

const upload = multer({ storage: storage })

//for settings update
app.post("/settingsUpdate", upload.single('profPic'), function(req, res){
  var fullName = req.body.fullName;
  var emailAddr = req.body.usrEmail;
  var addrLine1 = req.body.addr1;
  var addrLine2 = req.body.addr2;
  var pinCode = req.body.pincode;
  var mobNo = req.body.usrPhNo;

  //Inserting the user details to the database

    var newUser = {
      Name : fullName,
      emailAddr : emailAddr,
      addressLine1 : addrLine1,
      addressLine2 : addrLine2,
      pincode : pinCode,
      mobNo : mobNo
    }

    user_details.insertMany(newUser)

   // console.log(result)
    res.status(200);
    res.send("Details Updated Successfully")
    
  })


  //update transaction after the purchase of a rpoduct
  app.get("/addtransaction/:trans", async function(req, res){
  //Inserting the user purchases to the database
  try {
    await all_orders.insertMany(JSON.parse(req.params.trans))
    console.log("[*] Added a new transaction.")
    res.json({"Status" : "OK"})
  } catch (err) {
    console.error('Failed to add documents:', err);
    res.status(500).json({"Status" : "Failed"});
  }
  })

// clear the cart of the user after purchasing all items in cart
app.delete('/removefromcart/:name', async (req, res) => {
  try {
    await cart.findOneAndUpdate({"userName" : req.params.name}, {"items" : []});
    console("deleting")
    
    res.status(200).json({'status' : 'ok'});
  } catch (err) {
    console.error('Failed to delete document:', err);
    res.status(500).send('Failed to delete document');
  }
});

//handle buy now pages
app.get("/buynow/:item", function(req, res){
  console.log("link reached" + req.params.item)
  res.send("OK")
})

//get details of all the previous orders of a user
app.get("/getorderdet/:name", async function(req, res){
  try {
    const examples = await all_orders.find({"userName" : req.params.name}).sort({"dateOfPurchase" : -1});
    console.log("[*] Sent order details information successfully.")
    res.json(examples);
  } catch (err) {
    console.error('Failed to fetch documents:', err);
    res.status(500).send('Failed to fetch documents');
  }
})

app.get("/product", function(req, res){
    res.end("OK")
})





















http.createServer(app)
  .listen(port, () => {
    console.log(`Listening on ${config.baseURL}`);
  });
