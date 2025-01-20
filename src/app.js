const express = require("express");

const app = express();

const { adminAuth ,userAuth} = require("../middlewares/auth");

app.use("/admin", adminAuth);
app.use("/user",userAuth);

app.get("/user/login",userAuth, (req, res) => {
  res.send("User Data send");
});
app.get("/admin/getAllData", (req, res) => {
  res.send("User Data send");
});
app.get("/admin/deleteUser")

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
