const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");
const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const token = jwt.sign({ email }, process.env.SECRET, { expiresIn: "30m" });
    const newUser = await User.create({ username, email, password });
    res.status(200).json({
      message: "User signed up successfully!",
      user: newUser,
      token,
    });
  } catch (err) {
    res.status(400).json({
      Error: "Couldn't create user",
      errMessage: err,
    });
  }
};
const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      console.log("Couldnt login user");
      return next();
    }
    const token = jwt.sign({ username }, process.env.SECRET, {
      expiresIn: "30m",
    });
    res.status(200).json({
      status: "ok",
      token,
    });
  } catch (err) {
    res.status(400).json({
      message: "Couldn't login",
      error: err,
    });
  }
};
const deleteAllUsers = async (req, res, next) => {
  try {
    await User.deleteMany();
    res.json({
      message: "all Users have been deleted",
    });
  } catch (err) {
    res.json({
      message: "Can/'t delete Users",
    });
  }
};
module.exports = {
  createUser,
  loginUser,
  deleteAllUsers,
};
