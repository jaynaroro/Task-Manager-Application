const Task = require("../models/Task");

//create new task
const addTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//show all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//find 1 task
const getOneTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res
        .status(404)
        .json({ msg: `there is no task with the id ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//delete 1 task
const removeOneTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res
        .status(404)
        .json({ msg: `there is no task with the ID ${taskID}` });
    }
    res.status(200).json({ msg: `task ID ${taskID} has been deleted` });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//update task
const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      runValidators: true,
      new: true,
    });
    if (!task) {
      res.status(404).json({ msg: `there is no task with the id ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const removeAllTasks = (req, res) => {
  res.send("All Tasks Deleted");
};

module.exports = {
  getAllTasks,
  addTask,
  updateTask,
  removeOneTask,
  removeAllTasks,
  getOneTask,
};
