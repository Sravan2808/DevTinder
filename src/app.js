const express = require('express');


const app = express();

// app.use("/route",rH,[rH2,rH3],rH4,rH5)

app.get("/user",(req,res,next)=>{
  console.log("Handling the route user!!");
  // res.send("Route Handler 1")
  next()
},(req,res,next)=>{
  console.log("Handling the route user 2!!");
  // res.send("Route Handler 2")
  next()
},(req,res,next)=>{
  console.log("Handling the route user 3!!");
  // res.send("Route Handler 3")
  next()
},(req,res,next)=>{
  console.log("Handling the route user 4!!");
  // res.send("Route Handler 4")
  next()
},(req,res,next)=>{
  console.log("Handling the route user 5!!");
  res.send("Route Handler 5")
  next()
})


app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});