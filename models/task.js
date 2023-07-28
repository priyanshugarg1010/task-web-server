const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema for the task
const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
