const userRouter = require("express").Router();
const {
  createUser,
  loginUser,
  deleteAllUsers,
  getAllUsers,
  getUserData,
  verifyUser,
} = require("../controllers/userController");
userRouter.post("/signup", createUser);
userRouter.post("/login", loginUser);
userRouter.delete("/", deleteAllUsers);
userRouter.get("/", getAllUsers);
userRouter.get("/:id", verifyUser, getUserData);
module.exports = userRouter;
