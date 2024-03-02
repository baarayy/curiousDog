const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute");
const messageRouter = require("./routes/messageRoute");
const notFound = require("./utils/notFound");
dotenv.config();
const DB = process.env.DATABASE;
console.log(DB);
mongoose
  .connect(DB)
  .then(() => console.log("DB connection is successful!"))
  .catch((err) => console.log(err));
const app = express();
app.use(express.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/messages", messageRouter);
app.use("*", notFound);
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log("App is running on port 3030");
});
