const mongoose = require("mongoose");

//document structure
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

//model
//export the schema for the document as a package inside the mongoose model
module.exports = mongoose.model("Task", TaskSchema);
