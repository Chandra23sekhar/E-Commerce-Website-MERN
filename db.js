// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { all } = require('./routes');

// Create an instance of Express.js
const app = express();
const port = 3000;

// MongoDB connection URI and database name
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
  productPrice: {
    type: Number,
    required: true,
  },
  productQty: {
    type: Number,
    required: true,
  },
});

// Create a Mongoose Model
const products = mongoose.model('products', Product_Inventory);

// Middleware to parse JSON data
app.use(bodyParser.json());

// Create a POST route to create a new document
app.post('/data', async (req, res) => {
  try {
    const example = new Example(req.body);
    const savedExample = await example.save();
    res.json(savedExample);
  } catch (err) {
    console.error('Failed to create document:', err);
    res.status(500).send('Failed to create document');
  }
});

// Create a GET route to fetch all documents
app.get('/data', async (req, res) => {
  try {
    const all_prods = await products.find();
    res.json(all_prods);
  } catch (err) {
    console.error('Failed to fetch documents:', err);
    res.status(500).send('Failed to fetch documents');
  }
});

// Create a GET route to fetch a single document by ID
app.get('/data/:productName', async (req, res) => {
  try {
    const example = await products.findOne({"productName" : req.params.productName});
    if (!example) {
      return res.status(404).send('Document not found');
    }
    res.json(example);
  } catch (err) {
    console.error('Failed to fetch document:', err);
    res.status(500).send('Failed to fetch document');
  }
});

// Create a PUT route to update a document by ID
app.put('/data/:id', async (req, res) => {
  try {
    const example = await Example.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!example) {
      return res.status(404).send('Document not found');
    }
    res.json(example);
  } catch (err) {
    console.error('Failed to update document:', err);
    res.status(500).send('Failed to update document');
  }
});

// Create a DELETE route to delete a document by ID
app.delete('/data/:id', async (req, res) => {
  try {
    const example = await Example.findByIdAndDelete(req.params.id);
    if (!example) {
      return res.status(404).send('Document not found');
    }
    res.send('Document deleted successfully');
  } catch (err) {
    console.error('Failed to delete document:', err);
    res.status(500).send('Failed to delete document');
  }
});

module.exports = products;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
