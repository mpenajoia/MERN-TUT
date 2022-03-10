// variable to represent express
const express = require('express');
// variable to pull from express
const app = express();
// import our Model
const UserModel = require('./models/Users');
// allows front end connection 'without errors', dont forget to add it below (line 19)
const cors = require('cors')

// introduces the dotenv
require('dotenv').config();
const dbUser = process.env.MONGO_USER;
const dbPass = process.env.MONGO_PASS;

const mongoose = require('mongoose');

// needed to parse through body requests
app.use(express.json());
app.use(cors());

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.6ajsr.mongodb.net/merntutorial?retryWrites=true&w=majority`)

// GET request
app.get("/getUsers", (req, res)=> {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    });
});

// POST request
app.post("/createUser", async (req, res) => {
    // represents the data we want to insert in our db coming from front end
    const user = req.body
    // use the imported model to create a new user with the contents of the req.body
    const newUser = new UserModel(user);
    await newUser.save();
    // send back our new user
    res.json(user)
})

// get api to 'start', call back function will run is all goes well
app.listen(3001, () => {
    console.log('Server Running')
})