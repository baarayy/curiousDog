const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  content: {
    type: String,
    minlength: 1,
  },
  sentAt: {
    type: Date,
  },
});
const Message = mongoose.model("Message", messageSchema);
module.exports = messageSchema;
