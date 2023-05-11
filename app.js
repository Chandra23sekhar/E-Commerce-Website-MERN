const express = require('express');
const app = express();
const http = require('http')
const bodyParser = require("body-parser")

app.get("/", function(req, res){
    res.json({"Users" : ["UserOne", "UserTwo"]})
})

app.use(express.json());       
app.use(express.urlencoded({extended: true})); 

app.post("/", function(req, res){

    const products = ["iphone 12", "oneplus 9", "macbook pro", "samsung tv"];
    var reqItem = req.body.itemName;
    var isPresent = 0;

    for(let i=0;i<products.length;i++){
        if(reqItem.toLowerCase() === products[i]){
            isPresent = 1;
        }
    }

    //If product is present in inventory response -> 1, else response -> 0

    //TO-DO : if product is present return all the names and description of the product as a json array.

    res.json({"Product Status" : isPresent})
})



http.createServer(app).listen(3001, function(){
    console.log("Server stared on port 3001");
})

