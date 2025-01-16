const express = require("express");

// creating a new web server
const app = express();



// This will match all the HTTP method API calls to /test
app.get("/user", (req, res) => {
  res.send({ firstName: "Sravan", LastName: "Surya" });
});

app.post("/user", (req, res) => {
  // Saving data to DB
  res.send("Data successfully saved to the database!");
});

app.delete("/user", (req, res) => {
  res.send("Deleted successfully!");
  })

// this will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
