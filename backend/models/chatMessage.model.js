const mongoose = require("mongoose");

const chatMessageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now,
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
});

const ChatMessage = mongoose.model("ChatMessage", chatMessageSchema);

module.exports = ChatMessage;
