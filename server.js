const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const { authCheck } = require('./middleware/authMiddleware');

//environment variabls init
const PORT = process.env.SERVER_PORT;

//requiest body init
app.use(express.json());
app.use(express.urlencoded({ extended :false }));

//use middleware
app.use(authCheck)

//student route use
app.use('/api/students', require('./routes/student'));

//add express server listener with port
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));