const messageRouter = require("express").Router();
const {
  sendMessage,
  deleteAllMessages,
} = require("../controllers/messageController");
messageRouter.post("/send", sendMessage);
messageRouter.delete("/", deleteAllMessages);
module.exports = messageRouter;
