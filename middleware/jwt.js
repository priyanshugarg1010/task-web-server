const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;
const createError = require("../utils/createError.js");

//function to verify the token from the user
const verifyToken = (req, res, next) => {
  const token = req.cookies.acessToken;
  // console.log(token);

  if (!token) {
    return next(createError(401, "your are not authenticated"));
  }

  jwt.verify(token, JWT_KEY, async (err, payload) => {
    if (err) {
      return next(createError(403, "invalid token"));
    }
    req.userId = payload._id;
    next();
  });
};

module.exports = verifyToken;
