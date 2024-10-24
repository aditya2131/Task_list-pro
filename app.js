// Required dependencies
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

// Set EJS as the view engine
app.set("view engine", "ejs");

// Set up body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Route for Home page (List)
app.get("/", (req, res) => {
  res.render("list", { listTitle: "Today", newListItems: items });
});

// Route for Work page
app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

// Route for About page
app.get("/about", (req, res) => {
  res.render("about");
});

// Route to handle adding items (Home page)
app.post("/", (req, res) => {
  const item = req.body.newItem;

  if (req.body.list === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

// Route to handle adding items (Work page)
app.post("/work", (req, res) => {
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

// Route to delete items
app.post("/delete", (req, res) => {
  const index = req.body.index;
  const list = req.body.list;

  if (list === "Work List") {
    workItems.splice(index, 1);
    res.redirect("/work");
  } else {
    items.splice(index, 1);
    res.redirect("/");
  }
});

// Route to edit items
app.get("/edit", (req, res) => {
  const index = req.query.index;
  const listTitle = req.query.list === "Work List" ? "Work List" : "Today";
  const itemToEdit = listTitle === "Work List" ? workItems[index] : items[index];
  
  res.render("edit", { itemToEdit: itemToEdit, itemIndex: index, listTitle: listTitle });
});

// Route to handle edit form submission
app.post("/edit", (req, res) => {
  const newItem = req.body.newItem;
  const index = req.body.index;
  const list = req.body.list;

  if (list === "Work List") {
    workItems[index] = newItem;
    res.redirect("/work");
  } else {
    items[index] = newItem;
    res.redirect("/");
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
