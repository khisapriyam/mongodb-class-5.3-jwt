const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const colors = require('colors');
const connectMongoDB  = require('./config/db')

//mongoDB connection init
connectMongoDB();


//environment variabls init
const PORT = process.env.SERVER_PORT;

//requiest body init
app.use(express.json());
app.use(express.urlencoded({ extended :false }));


//student route use
app.use('/api/students', require('./routes/student'));
app.use('/api/admins', require('./routes/admin'));




//add express server listener with port
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));