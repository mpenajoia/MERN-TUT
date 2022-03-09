// variable to represent express
const express = require('express');
// variable to pull from express
const app = express();

// get api to 'start', call back function will run is all goes well
app.listen(3001, () => {
    console.log('Server Running')
})