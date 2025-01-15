const express = require("express");

// creating a new web server
const app = express();


app.get("/", (req, res) => {
  res.send("Namaste from the dashboard!");
});


app.get("/hello", (req, res) => {
  res.send("Hello hello hello!");
});


app.get("/test", (req, res) => {
  res.send("Hello from the server!");
});


app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
