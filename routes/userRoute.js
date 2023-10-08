const userRouter = require("express").Router();
const {
  createUser,
  loginUser,
  deleteAllUsers,
} = require("../controllers/userController");
userRouter.post("/signup", createUser);
userRouter.post("/login", loginUser);
userRouter.delete("/", deleteAllUsers);
module.exports = userRouter;
