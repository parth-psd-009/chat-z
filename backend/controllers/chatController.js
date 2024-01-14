const ChatMessage = require("../models/chatMessage");

const sendMessage = async (socket, message) => {
    try {
        const newMessage = new ChatMessage({ user: socket.id, message });
        await newMessage.save();

        socket.broadcast.emit("chat message", newMessage);
    } catch (error) {
        console.error("Error sending message:", error);
    }
};

module.exports = {
    sendMessage,
};
