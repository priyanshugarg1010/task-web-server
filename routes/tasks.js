const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/jwt.js");
const {
  getTask,
  addTask,
  deleteTask,
} = require("../controller/task.controller.js");

router.get("/", verifyToken, getTask);
router.post("/", verifyToken, addTask);
router.delete("/:id", verifyToken, deleteTask);

module.exports = router;
