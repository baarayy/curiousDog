const userRouter = require("express").Router();
const {
  createUser,
  loginUser,
  deleteAllUsers,
  getAllUsers,
  getUserData,
} = require("../controllers/userController");
userRouter.post("/signup", createUser);
userRouter.post("/login", loginUser);
userRouter.delete("/", deleteAllUsers);
userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserData);
module.exports = userRouter;
