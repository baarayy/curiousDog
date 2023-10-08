const Message = require("../models/message");

const sendMessage = async (req, res, next) => {
  try {
    const { id, content } = req.body;
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
};
