const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  content: {
    type: String,
    minlength: [3, "message is too short"],
    require: [true, "You cannot send empty messages"],
  },
  sendTo: {
    type: mongoose.Types.ObjectId,
    required: [true, "Select a user to send the message to!"],
  },
});
const Message = mongoose.model("Message", messageSchema);

module.exports = messageSchema;
