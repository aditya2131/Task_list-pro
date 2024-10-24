<<<<<<< HEAD
//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  const day = date.getDate();
  res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res) {
  const item = req.body.newItem;
  
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req, res) {
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/work", function(req, res) {
=======
   //jshint esversion:6


   const express = require("express");
   const bodyParser = require("body-parser");
   const date = require(__dirname + "/date.js");

   const app = express();

   const items = [ "Buy Food", "Cook Food", "Eat Food"];
   const workItems = [];

   app.set('view engine', 'ejs');

   app.use(bodyParser.urlencoded({extended: true}));
   app.use(express.static("public"));

   app.get("/", function(req, res) {

const day = date.getDate();

     res.render("list", {
       listTitle: day, newListItems: items
     });

   });

    // home route
   app.post("/", function(req, res){
     const item = req.body.newItem;
     if (req.body.list === "Work") {
       workItems.push(item);
       res.redirect("/work");
     } else {
       items.push(item);
        res.redirect("/");
     }


   });

   app.get("/work", function(req, res){
     res.render("list", {listTitle: "Work List", newListItems: workItems});
   });

app.post("/work", function(req, res){
>>>>>>> 7b41f386aac875c9505e9b2ece17f815dfa9415c
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

<<<<<<< HEAD
// delete route
app.post("/delete", function(req, res) {
  const index = req.body.index;
  
  if (req.body.list === "Work List") {
=======
//delete route
app.post("/delete", function(req, res) {
  const index = req.body.index;
  if (req.body.list === "Work") {
>>>>>>> 7b41f386aac875c9505e9b2ece17f815dfa9415c
    workItems.splice(index, 1);
    res.redirect("/work");
  } else {
    items.splice(index, 1);
    res.redirect("/");
  }
});

<<<<<<< HEAD
// edit route
=======
//edit route
>>>>>>> 7b41f386aac875c9505e9b2ece17f815dfa9415c
app.get("/edit", function(req, res) {
  const index = req.query.index;
  const list = req.query.list;

  let itemToEdit;
  if (list === "Work List") {
    itemToEdit = workItems[index];
  } else {
    itemToEdit = items[index];
  }

  res.render("edit", {
    listTitle: list,
    itemIndex: index,
    itemToEdit: itemToEdit
  });
});

app.post("/edit", function(req, res) {
  const index = req.body.index;
  const newItem = req.body.newItem;
<<<<<<< HEAD
  
=======
>>>>>>> 7b41f386aac875c9505e9b2ece17f815dfa9415c
  if (req.body.list === "Work List") {
    workItems[index] = newItem;
    res.redirect("/work");
  } else {
    items[index] = newItem;
    res.redirect("/");
  }
});

<<<<<<< HEAD
// about route
app.get("/about", function(req, res) {
=======
  //about rote
app.get("/about", function(req, res){
>>>>>>> 7b41f386aac875c9505e9b2ece17f815dfa9415c
  res.render("about");
});

app.listen(3000, function() {
<<<<<<< HEAD
  console.log("Server started on port 3000");
=======
  console.log("Brain the size of earth, well starting your server on port 3000. Shut up Aditya!");
>>>>>>> 7b41f386aac875c9505e9b2ece17f815dfa9415c
});
