const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  addTask,
  updateTask,
  getOneTask,
  removeOneTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(addTask);

router.route("/:id").get(getOneTask).patch(updateTask).delete(removeOneTask);

module.exports = router;
