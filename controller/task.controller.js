const Task = require("../models/task");

//function to get all the tasks
const getTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

//function to delete a specific task
const deleteTask = async (req, res) => {
  try {
    const taskId = req.params._id;
    await Task.findOneAndDelete({ taskId });
    res.status(200).redirect("/tasks");
  } catch (error) {
    console.error(error);
    res.status(500).redirect("/tasks");
  }
};

//function to add a new task
const addTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = new Task({
      title,
      description,
    });
    await newTask.save();
    res.status(201).redirect("/tasks");
  } catch (error) {
    console.error(error);
    res.status(500).redirect("/tasks");
  }
};

module.exports = { addTask, deleteTask, getTask };
