const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "This username is used"],
    required: [true, "Username is required"],
    minlenght: [5, "Too short username"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: {
      validator: (Email) => isEmail(Email),
      message: "Invalid Email",
    },
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "password is too short"],
  },
  messages: [Object],
});
userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
  } catch (err) {
    return next(err);
  }
});
const User = mongoose.model("User", userSchema);
module.exports = User;
