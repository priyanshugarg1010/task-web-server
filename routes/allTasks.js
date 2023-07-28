const express = require("express");
const router = express.Router();

//show all the task
router.get("/", (req, res) => {
  res.send("List of all tasks");
});

module.exports = router;
