const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Done");
  res.send("Hello World!");
});

app.listen(8000);
