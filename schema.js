const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, "content is required"],
  },
  time: {
    type: String,
    default: new Date().toLocaleString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'})
  },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;








