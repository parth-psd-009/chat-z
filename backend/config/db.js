const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", () => {
    console.log("Error while connecting to database");
});

db.once("open", () => {
    console.log("Connected successfully");
});

module.exports = db;
