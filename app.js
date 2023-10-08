const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute");
dotenv.config();
const DB = process.env.DATABASE.replace("<password>", process.env.PASSWORD);
mongoose
  .connect(DB)
  .then(() => console.log("DB connection is successful!"))
  .catch((err) => console.log(err));
const app = express();
app.use(express.json());
app.use("/api/v1/users", userRouter);
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log("App is running on port 3030");
});
