// variable to represent express
const express = require('express');
// variable to pull from express
const app = express();
// import our Model
const UserModel = require('./models/Users');


// introduces the dotenv
require('dotenv').config();
const dbUser = process.env.MONGO_USER;
const dbPass = process.env.MONGO_PASS;

const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.6ajsr.mongodb.net/merntutorial?retryWrites=true&w=majority`)

app.get("/getUsers", (req, res)=> {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    });
});

// get api to 'start', call back function will run is all goes well
app.listen(3001, () => {
    console.log('Server Running')
})