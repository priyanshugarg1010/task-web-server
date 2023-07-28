const mongoose = require("mongoose");
const URL = process.env.MONGODB_URL;

const connect = async () => {
  try {
    await mongoose.connect(URL);
    console.log("connected to mongodb");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connect;
