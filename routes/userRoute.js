const userRouter = require("express").Router();
const { createUser, loginUser } = require("../controllers/userController");
userRouter.post("/signup", createUser);
userRouter.post("/login", loginUser);
module.exports = userRouter;
