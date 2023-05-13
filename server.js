const dotenv = require('dotenv');
const express = require('express');
const http = require('http');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser')
const router = require('./routes/index');
const { auth } = require('express-openid-connect');
const multer = require('multer')
const cors = require('cors')

dotenv.load();

const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('uploads'));
// app.use(express.json());       
// app.use(express.urlencoded({extended: true})); 
// app.use(logger('dev'))

const config = {
  authRequired: false,
  auth0Logout: true
};

const port = process.env.PORT || 3000;
if (!config.baseURL && !process.env.BASE_URL && process.env.PORT && process.env.NODE_ENV !== 'production') {
  config.baseURL = `http://localhost:${port}`;
}

app.use(auth(config));

// Middleware to make the `user` object available for all views
app.use(function (req, res, next) {
  res.locals.user = req.oidc.user;
  next();
});

app.use('/login', router);

// Catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// Error handlers
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: process.env.NODE_ENV !== 'production' ? err : {}
  });
});


//MY code



app.get("/", function(req, res){
  res.json({"Logged In" : req.oidc.isAuthenticated(),
      "User Details" : req.oidc.user
  })
})


app.post("/", function(req, res){

    const products = ["iphone 12", "oneplus 9", "macbook pro", "samsung tv"];
    var reqItem = req.body.itemName;
    var isPresent = 0;

    for(let i=0;i<products.length;i++){
        if(reqItem.toLowerCase() === products[i]){
            isPresent = 1;
            res.status = 200;
            var str = encodeURIComponent(reqItem);
            res.redirect('/products/' + str);
        }
    }

    //If product is present in inventory response -> 1, else response -> 0

    //TO-DO : if product is present return all the names and description of the product as a json array.

    res.json({"Product Status" : isPresent})
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
  // var pic = req.body.filename; // implement uploading profile pictures
  console.log(req.body);  
  res.json({"Received Req" : "OK", "Full Name" : fullName, 
  "Email Address" : emailAddr, 
  "Address Line 1" : addrLine1, 
  "Address Line 2" : addrLine2, 
  "Pincode" : pinCode,
  "Mobile Number" : mobNo, 
  "Prof Pic" : pic});
})


app.get("/product", function(req, res){
    res.end("OK")
})

app.get('/login', function(req, res){
    console.log("Login hkj")
    res.end("OK")
})






















http.createServer(app)
  .listen(port, () => {
    console.log(`Listening on ${config.baseURL}`);
  });
