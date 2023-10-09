const messageRouter = require("express").Router();
const {
  sendMessage,
  deleteAllMessages,
  getUserMessages,
  deleteUserMessages,
} = require("../controllers/messageController");
const { verifyUser } = require("../controllers/userController");
messageRouter.post("/send", sendMessage);
messageRouter.delete("/", deleteAllMessages);
messageRouter.get("/:id", verifyUser, getUserMessages);
messageRouter.delete("/:id", verifyUser, deleteUserMessages);
module.exports = messageRouter;
