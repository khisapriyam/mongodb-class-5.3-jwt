const fs = require('fs');
const path = require('path');
const Student = require('../models/studentModel')

//Students data model
//const students = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/students.json')).toString());

//get latest id
const getLatestId = () => {

    if(students.length > 0){
        return students[students.length - 1].id + 1;

    }else{
        return 1;
    }    
}

//get all students
const getAllStudents = async (req, res) => {
    
    let data = await Student.find();
    res.status(200).json(data);

    
}

//get single students
const getSingleStudent = async (req, res) => {

    let id = req.params.id;

    let single_data = await Student.findById(id);

    res.status(200).json(single_data)

    
}

//create student
const createStudent = async (req, res) => {

    let data = await Student.create({
        name : req.body.name,
        age : req.body.age,
        skill : req.body.skill
    });

    res.status(201).json({
        message : "Student data addedd successful"
    });
   
    
}
//update student
const updateStudent = async (req, res) => {

    let id = req.params.id;

    await Student.findByIdAndUpdate(id, req.body, {
        new : true
    });

    res.status(200).json({
        message : "Student data updated"
    })

}


//delete student
const deleteStudent = async (req, res) => {

    let id = req.params.id;

    await Student.findByIdAndDelete(id);

    res.status(200).json({
        message : 'Student data deleted successful'
    })
}


module.exports = {
    getAllStudents,
    getSingleStudent,
    createStudent,
    updateStudent,
    deleteStudent

}