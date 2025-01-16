const express = require("express");

// creating a new web server
const app = express();


<<<<<<< HEAD

// This will match all the HTTP method API calls to /test
app.get("/user", (req, res) => {
  res.send({ firstName: "Sravan", LastName: "Surya" });
});

app.post("/user", (req, res) => {
  // Saving data to DB
  res.send("Data successfully saved to the database!");
=======
app.use("/", (req, res) => {
  res.send("Namaste from the dashboard!");
});


app.use("/hello", (req, res) => {
  res.send("Hello hello hello!");
>>>>>>> b1ab0b2f77c98c394c4c63315d6db46d56e95773
});


<<<<<<< HEAD
// this will match all the HTTP method API calls to /test
=======
>>>>>>> b1ab0b2f77c98c394c4c63315d6db46d56e95773
app.use("/test", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
