const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const io = require("./socket");

const app = express();
const server = http.createServer(app);

mongoose.connect(
    "mongodb+srv://parthsarathidixit:PTwgqgFfGCi5QVfB@cluster0.ccqo3bf.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.use(express.json());

io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

server.listen(3001, () => {
    console.log("Server is running on port 3001");
});
