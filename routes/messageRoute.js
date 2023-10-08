const messageRouter = require("express").Router();
const {
  sendMessage,
  deleteAllMessages,
  getUserMessages,
} = require("../controllers/messageController");
messageRouter.post("/send", sendMessage);
messageRouter.delete("/", deleteAllMessages);
messageRouter.get("/:id", getUserMessages);
module.exports = messageRouter;
