const bcrypt = require('bcryptjs');
const Admin = require('../models/adminModel');


//get all admin
const getAllAdmin = async( req, res) => {

    let data = await Admin.find();
    res.status(200).json(data);
}

//get single admin
const getSingleAdmin = async ( req, res) => {

    let data = await Admin.findById(req.params.id)
    res.status(200).json(data);
}

//create admin
const createAdmin = async( req, res) => {

    const {name, email, cell, location, password, skill, username} = req.body;

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if( !name || !email || !cell || !password || !username){
        res.status(400).json({
            message : 'All fields are required'
        });

    }else{
        await Admin.create({
            ...req.body,
            password : hashPassword
        });
    
        res.status(200).json({
            message : 'Create admin'
        });
    }
 
}

//delete admin
const deleteAdmin = async (req, res) => {
    const delete_data = await Admin.findById(req.params.id);

    if(!delete_data){
        res.status(400).json({
            message : 'Delete data not found'
        });

    }else{
        const data = await Admin.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message : `Delete ${ data.name } data`
        });

    }
  
}

//update admin
const updateAdmin = ( req, res) => {
    res.status(200).json({
        message : 'Update admin'
    });
}

//admin profile
const adminProfile = (req, res) => {

    res.json(req.user)

}
//admin home
const adminHome = (req, res) => {

    res.json(req.user)
}


module.exports = {
    getAllAdmin,
    getSingleAdmin,
    createAdmin,
    deleteAdmin,
    updateAdmin,
    adminProfile,
    adminHome
}