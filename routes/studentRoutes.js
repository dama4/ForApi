const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Root path message
router.get('/', (req, res) => {
    res.send('It is working as intended!');
});

router.post('/students', studentController.createStudent);
router.get('/students', studentController.getStudents);
router.get('/students/:id', studentController.getStudentById);
router.put('/students/:regNo', studentController.updateStudent);
router.patch('/students/:regNo', studentController.patchStudent);
router.delete('/students/:id', studentController.deleteStudent);

module.exports = router;
