// mongoose templates that will be used by backend
const mongoose = require("mongoose");
const { Schema } = mongoose;

const TasksSchema = new Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: [true, "A task must have a title"],
    minLength: [5, "Title must be at the least 5 characters"],
  },
  description: {
    type: String,
    required: [true, "A user must have a description"],
    minLength: [5, "Description must be at the least 5 characters"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Task = mongoose.model("Task", TasksSchema);
module.exports = Task;
