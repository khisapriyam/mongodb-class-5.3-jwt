const fs = require('fs');
const path = require('path');

//Students data model
const students = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/students.json')).toString());

//get latest id
const getLatestId = () => {

    if(students.length > 0){
        return students[students.length - 1].id + 1;

    }else{
        return 1;
    }    
}

//get all students
const getAllStudents = (req, res) => {

    if(students.length > 0){
        res.status(200).json(students);
    }
    else{
        res.status(404).json({
            messsage : "Student data not found"
        });
    }
}

//get single students
const getSingleStudent = (req, res) => {

    let id = req.params.id;

    if(students.some( data => data.id == id)){
        res.status(200).json(students.find( data => data.id == id));
    }else{
        res.status(404).json({
            messsage : 'Student is not found'
        });
    }   
}

//create student
const createStudent = (req, res) => {

    if(req.body.name != '' || req.body.age != '' || req.body.skill != ''){
        students.push({
            id : getLatestId(),
            name : req.body.name,
            age : req.body.age,
            skill : req.body.skill
        });
    
        fs.writeFileSync(path.join(__dirname, '../data/students.json'), JSON.stringify(students))
    
        res.status(201).json({
            messsage : 'student data created successfully'
        });

    }else{
        res.status(400).json({
            messsage : 'student data not created'
        });

    }
    
    
}
//update student
const updateStudent = (req, res) => {
    res.send('Ami akhon controller theke Student update korchi')
}
//delete student
const deleteStudent = (req, res) => {

    let id = req.params.id;

    if( students.some( data => data.id == id )){

        let updated_data = students.filter( data => data.id != id);
        fs.writeFileSync(path.join(__dirname, '../data/students.json'),JSON.stringify(updated_data));

        res.status(202).json({
            message : "Student data deleted"
        })

    }else{
        res.status(400).json({
            message : "Student not found"
        })

    }
}


module.exports = {
    getAllStudents,
    getSingleStudent,
    createStudent,
    updateStudent,
    deleteStudent



}