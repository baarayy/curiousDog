const messageRouter = require("express").Router();
const {
  sendMessage,
  deleteAllMessages,
  getUserMessages,
  deleteUserMessages,
} = require("../controllers/messageController");
messageRouter.post("/send", sendMessage);
messageRouter.delete("/", deleteAllMessages);
messageRouter.get("/:id", getUserMessages);
messageRouter.delete("/:id", deleteUserMessages);
module.exports = messageRouter;
