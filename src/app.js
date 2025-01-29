const express = require("express");
const connectDB = require("./config/database");
const app = express();

const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  // Creating a new instance of the User model
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User Added successfully!");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});
// Get user by email
app.get("/user", async (req, res) => {
  try {
    const EmailId = req.body.emailId;
    // console.log(EmailId);

    const user = await User.find({ emailId: EmailId });
    if (user.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(404).send("Something went wrong");
  }
});

// Feed Api - GET/feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

app.get("/id", async (req, res) => {
  try {
    const id = req.body._id;
    const id1 = await User.findById({ _id: id });
    res.send(id1);
  } catch (err) {
    res.status(404).send("something went wrong");
  }
});

// Delete a user from the database
app.delete("/user", async (req, res) => {
  try {
    const userId = req.body.userId;
    const user = await User.findByIdAndDelete(userId);
    res.send("User deleted Successfully");
  } catch (err) {
    res.status(404).send("something went wrong");
  }
});

// Update data of the user
app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  console.log(userId);
  console.log(data);
  try {
    const user = await User.findByIdAndUpdate(userId, data, {
      returnDocument: "before",
      runValidators: true,
    });
    console.log(user);
    res.send("User updated successfully");
  } catch (err) {x
    res.status(400).send("UPDATE FAILED: " + err.message);
  }
});

app.patch("/userByEmailID", async (req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  console.log(email);

  console.log(name);

  try {
    const user1 = await User.findOneAndUpdate(
      { emailId: email },
      { firstName: name }
    );
    console.log(user1);
    res.send("User updated successfully");
  } catch (err) {
    res.status(404).send("Something went wrong: " + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established ...");
    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777...");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!!");
  });
