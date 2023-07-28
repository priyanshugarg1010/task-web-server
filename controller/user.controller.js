const User = require("../models/user.js");

//function to get user details
const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    res.status(200).send(user);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "user does not exist" });
  }
};

module.exports = { getUser };
