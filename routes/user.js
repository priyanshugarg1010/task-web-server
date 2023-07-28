const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/jwt.js");
const { getUser } = require("../controller/user.controller.js");

router.get("/:id", verifyToken, getUser);

module.exports = router;
