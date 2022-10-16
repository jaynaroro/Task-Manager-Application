const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://JayNaroro:JayNaroro@cluster0.s7jmetb.mongodb.net/03-Task-Manager?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;
