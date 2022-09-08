const mongoose = require('mongoose');

//admin Model schema
const adminModel = mongoose.Schema({
    name : {
        type : String,
        required : [true, "Name field is required"]
    },
    email : {
        type : String,
        required : [true, "Email field is required"],
        unique : true
    },
    cell : {
        type : String,
        required : [true, "Cell field is required"],
        unique : true
        //match : /^(01|8801|+8801)[0-9]{9}$/
    },
    username : {
        type : String,
        required : [true, "username field is required"],
        unique : true,
        lowercase : true,
        minLength : 5,
        maxLength : 10
    },
    location : {
        type : String,
        required : false,
        default : "Dhaka"
    },
    skill : {
        type : String,
        required : false,
        default : "MERN"
    },
    password : String
}, {
    timeStamps : true
});


//export our model
module.exports = mongoose.model('Admin', adminModel)