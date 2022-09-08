
const express = require('express');
const router = express.Router();
const { getAllAdmin, getSingleAdmin, deleteAdmin, updateAdmin, createAdmin, adminProfile, adminHome } = require('../controllers/adminController');
const { adminLogin } = require('../controllers/authController');
const { authCheck } = require('../middleware/authMiddleware');

router.post('/login', adminLogin);

//private routes
router.get('/profile', authCheck, adminProfile);
router.get('/home', authCheck, adminHome);

//create admin route
router.get('/', getAllAdmin);
router.get('/:id', getSingleAdmin);
router.delete('/:id', deleteAdmin);
router.put('/:id', updateAdmin);
router.patch('/:id', updateAdmin);
router.post('/', createAdmin);







//export admin router
module.exports = router;