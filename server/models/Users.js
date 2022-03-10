// 1. import mongoose
const mongoose = require('mongoose');

// 2. lets create a schema
// mongoose.Schema is our constructor
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
});

const UserModel = mongoose.model("users", UserSchema);
// export this model to have access outside this file
module.exports = UserModel