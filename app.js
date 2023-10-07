const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const DB = process.env.DATABASE.replace("<password>", process.env.PASSWORD);
mongoose
  .connect(DB)
  .then(() => console.log("DB connection is successful!"))
  .catch((err) => console.log(err));
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log("App is running on port 3030");
});
