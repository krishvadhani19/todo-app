// mongoose templates that will be used by backend
const mongoose = require("mongoose");

const TasksSchema = new Schema({
  title: {
    type: String,
    required: true, 
  },
  decription: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("tasks", TasksSchema);
