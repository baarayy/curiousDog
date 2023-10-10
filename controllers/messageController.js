const Message = require("../models/message");
const User = require("../models/User");
const catchAsync = require("../utils/catchAsyncError");
const sendMessage = catchAsync(async (req, res, next) => {
  const { id, content } = req.body;
  const user = await User.findOne({ _id: id });
  if (!user) return next(new AppError("There is no user with this id", 404));
  const anonyMessage = await Message.insertMany({ sendTo: id, content });
  res.status(200).json({
    status: "Ok",
    msg: "Message sent successfully",
    message: anonyMessage,
  });
});
const getUserMessages = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findOne({ _id: id });
  if (!user) return next(new AppError("There is no user with this id", 404));
  console.log(user);
  const messages = await Message.find({ sendTo: user._id });
  res.status(200).json({
    status: "success",
    messages,
  });
});
const deleteUserMessages = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findOne({ _id: id });
  if (!user) return next(new AppError("There is no user with this id", 404));
  await Message.deleteMany({ sendTo: user._id });
  res.status(200).json({
    status: "Messages deleted successfully for this user",
  });
});
const deleteAllMessages = catchAsync(async (req, res, next) => {
  await Message.deleteMany();
  res.json({
    message: "all messages have been deleted",
  });
});
module.exports = {
  sendMessage,
  deleteAllMessages,
  getUserMessages,
  deleteUserMessages,
};
