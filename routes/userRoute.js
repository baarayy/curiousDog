const userRouter = require("express").Router();
const {
  createUser,
  loginUser,
  deleteAllUsers,
  getAllUsers,
} = require("../controllers/userController");
userRouter.post("/signup", createUser);
userRouter.post("/login", loginUser);
userRouter.delete("/", deleteAllUsers);
userRouter.get("/", getAllUsers);
module.exports = userRouter;
