// app.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const _ = require('lodash');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Connect to MongoDB using the connection string from the .env file
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB successfully.");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

// Define a schema and model for your items
const itemsSchema = new mongoose.Schema({
  name: String
});

const Item = mongoose.model("Item", itemsSchema);

// Default items
const defaultItems = [
  new Item({ name: "Welcome to your To-Do List!" }),
  new Item({ name: "Hit the + button to add a new item." }),
  new Item({ name: "<-- Hit this to delete an item." })
];

// Get route for the home page
app.get('/', async (req, res) => {
  try {
    const foundItems = await Item.find({});
    
    if (foundItems.length === 0) {
      // If no items found, insert default items
      await Item.insertMany(defaultItems);
      console.log("Default items added to the database.");
      res.redirect('/');
    } else {
      res.render('index', { items: foundItems });
    }
  } catch (err) {
    console.error("Error fetching items:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Post route to add a new item
app.post('/', async (req, res) => {
  const itemName = req.body.newItem;
  const newItem = new Item({ name: itemName });

  try {
    await newItem.save();
    res.redirect('/');
  } catch (err) {
    console.error("Error adding new item:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Post route to delete an item
app.post('/delete', async (req, res) => {
  const checkedItemId = req.body.checkbox;

  try {
    await Item.findByIdAndRemove(checkedItemId);
    console.log("Successfully deleted checked item.");
    res.redirect('/');
  } catch (err) {
    console.error("Error deleting item:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
