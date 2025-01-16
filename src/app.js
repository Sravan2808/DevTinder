const app = express();


app.get("/", (req, res) => {
  res.send("Namaste from the dashboard!");
});

// This will match all the HTTP method API calls to /test
app.get("/user", (req, res) => {
  res.send({ firstName: "Sravan", LastName: "Surya" });
});

app.get("/hello", (req, res) => {
  res.send("Hello hello hello!");
});

app.post("/user", (req, res) => {
  // Saving data to DB
  res.send("Data successfully saved to the database!");
});

app.delete("/user", (req, res) => {
  res.send("Deleted successfully!");
});

app.get("/test", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});