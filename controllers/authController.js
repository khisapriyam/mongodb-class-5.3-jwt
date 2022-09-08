const Admin = require('../models/adminModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Admin login System
const adminLogin = async(req, res) => {

    const { email, password } = req.body;

    //check user by email
    const login_data = await Admin.findOne({ email});

    //validate email
    if(!login_data){
        res.status(400).json({
            message : "Email not found"
        });
    }else{
        if( await bcrypt.compare(password, login_data.password )){

            const token = jwt.sign({ id : login_data._id}, process.env.JWT_SECRET, {
                expiresIn : "1d"
            });

            res.status(200).json({
                id : login_data._id,
                name : login_data.name,
                email : login_data.email,
                cell : login_data.cell,
                token : token        
            });

        }else{
            res.status(401).json({
                message : "Wrong password"
            });
        }        
    }
}


//auth exports
module.exports = {
    adminLogin
}