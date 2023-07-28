const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("../utils/createError.js");

const JWT_KEY = process.env.JWT_KEY;

//function to login
const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "user not found"));

    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    console.log(req.body.username);
    if (!isCorrect) return next(createError(400, "wrong password or username"));

    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_KEY
    );

    res
      .cookie("acessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .redirect("/tasks");
  } catch (error) {
    next(error);
  }
};

//function to register
const register = async (req, res, next) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("user created").redirect("/");
  } catch (error) {
    next(error);
  }
};

//function to logout
const logout = async (req, res) => {
  res
    .clearCookie("acessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("user has been logged out");
};
module.exports = { login, register, logout };
