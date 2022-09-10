const express = require("express");
const app = express();
const fs = require("fs");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Done");
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(8080);
