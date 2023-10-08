const Message = require("../models/message");
const User = require("../models/User");
const sendMessage = async (req, res, next) => {
  try {
    const { id, content } = req.body;
    const user = await User.findOne({ _id: id });
    if (!user)
      return res.status(400).json({
        message: "There is no user with this id",
      });
    const anonyMessage = await Message.insertMany({ sendTo: id, content });
    res.status(200).json({
      status: "Ok",
      msg: "Message sent successfully",
      message: anonyMessage,
    });
  } catch (err) {
    res.status(400).json({
      msg: "Couldn't send message",
    });
  }
};
const getUserMessages = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({
        Error: "There is no user with this ID",
      });
    }
    console.log(user);
    const messages = await Message.find({ sendTo: user._id });
    res.status(200).json({
      status: "success",
      messages,
    });
  } catch (err) {
    res.status(400).json({
      Error: "Couldn't find any messages for this user",
      errMsg: err,
    });
  }
};
const deleteAllMessages = async (req, res, next) => {
  try {
    await Message.deleteMany();
    res.json({
      message: "all messages have been deleted",
    });
  } catch (err) {
    res.json({
      message: "Can/'t delete messages",
    });
  }
};
module.exports = {
  sendMessage,
  deleteAllMessages,
  getUserMessages,
};
