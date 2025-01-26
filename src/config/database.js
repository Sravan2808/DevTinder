const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sravansurya2023:zBbv2hqMjH8dCurJ@namastenode.0a0yv.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
