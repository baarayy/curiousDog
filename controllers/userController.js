const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { promisify } = require("util");
const catchAsync = require("../utils/catchAsyncError");
const AppError = require("../utils/AppError");

const createUser = catchAsync(async (req, res, next) => {
  const { username, email, password } = req.body;
  const userDB = await User.findOne({ username });
  if (userDB) return next(new AppError("Username already exists!", 400));
  const token = jwt.sign({ _id: user._id }, process.env.SECRET, {
    expiresIn: "30m",
  });
  const newUser = await User.create({ username, email, password });
  res.status(200).json({
    message: "User signed up successfully!",
    user: newUser,
    token,
  });
});
const loginUser = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return next(new AppError("Incorrect username or password", 401));
  const token = jwt.sign({ _id: user._id }, process.env.SECRET, {
    expiresIn: "30m",
  });
  res.status(200).json({
    status: "ok",
    token,
  });
});
const deleteAllUsers = catchAsync(async (req, res, next) => {
  await User.deleteMany();
  res.json({
    message: "all Users have been deleted",
  });
});
const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    users,
  });
  next(new AppError("Coudln't get users", 400));
});
const getUserData = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findOne({ _id: id });
  res.status(200).json({
    user,
  });
  next(new AppError("Couldn't find data for this user", 400));
});
const verifyUser = catchAsync(async (req, res, next) => {
  const authorizationHeader = req.headers["authorization"];
  if (!authorizationHeader) {
    return next(new AppError("Please login first", 404));
  }
  const tokenParts = authorizationHeader.split(" ");
  if (tokenParts.length !== 2 || tokenParts[0].toLowerCase() !== "bearer") {
    return next(new AppError("Invalid Authorization header format", 400));
  }
  const token = tokenParts[1];
  const decoded = await promisify(jwt.verify)(token, process.env.SECRET);
  if (!decoded) return next(new AppError("Invalid token!", 401));
  const { id } = req.params;
  if (id !== decoded._id) {
    return next(
      new AppError("Invalid token! please login from your email", 400)
    );
  }
  const user = await User.findOne({ _id: decoded._id });
  if (user) {
    return next();
  }
  res.status(404).json({
    ErrorMessage: "User not found!",
  });
});
module.exports = {
  createUser,
  loginUser,
  deleteAllUsers,
  getAllUsers,
  getUserData,
  verifyUser,
};
