
const express = require('express');
//initializing router
const router = express.Router();


const {getAllStudents, getSingleStudent, createStudent, updateStudent, deleteStudent} = require('../controllers/studentController')

//Student Router
// router.get('/', getAllStudents);

// router.get('/:id', getSingleStudent);

// router.post('/', createStudent);

// router .put('/:id', updateStudent);

// router.patch('/:id', updateStudent,);

// router.delete('/:id', deleteStudent);

router.route('/').get(getAllStudents).post(createStudent);
router.route('/:id').get(getSingleStudent).put(updateStudent).patch(updateStudent).delete(deleteStudent);

//export router
module.exports = router;