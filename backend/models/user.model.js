const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: True,
    },
    password: {
        type: String,
        required: true,
        min: 8,
    },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
