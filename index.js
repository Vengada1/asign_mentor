//Importing the dotenv module
require("dotenv").config();

//Importing the express module
const express = require("express");

// Importing the Database Connection
const db = require("./dbConfig/connect");

db();

// Importing the Routes
const mentorRoutes = require("./routes/mentors");
const studentRoutes = require("./routes/students");

//Initializing the express
const app = express();

// Calling the express.json() method for parsing
app.use(express.json());

// Adding the Custom Middleware
app.use('/api', mentorRoutes);
app.use('/api', studentRoutes);

// API status if running or not
app.get('/', (req, res) => {
    res.send('Mentor and Student Assigning with Database');
})

//Initializing the port number
const PORT = process.env.PORT || 8080;

// Listening to the port
app.listen(PORT, () => {
    console.log(`Application is running on PORT ${PORT}`);
});