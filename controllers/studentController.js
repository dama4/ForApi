const Student = require('../models/student');

exports.createStudent = async (req, res) => {
  try {
    console.log('Request Body:', req.body); // Log the request body to debug
    const student = await Student.create(req.body);
    res.status(201).json({ message: 'Student created successfully' });
  } catch (error) {
    console.error('Error creating student:', error); // Log the actual error
    res.status(500).json({ error: 'An error occurred', details: error.message });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    console.error('Error fetching students:', error); // Log the detailed error
    res.status(500).json({ error: 'An error occurred while fetching students', details: error.message });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred', details: error.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const { regNo } = req.params;
    const updatedStudent = req.body;

    console.log('Received update request for regNo:', regNo);
    console.log('Updated student data:', updatedStudent);

    const [updatedRowCount] = await Student.update(updatedStudent, {
      where: { regNo: regNo }
    });

    if (updatedRowCount > 0) {
      res.json({ success: true, message: 'Student updated successfully' });
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    console.error('Error updating student:', error);
    res.status(500).json({ error: 'An error occurred', details: error.message });
  }
};

exports.patchStudent = async (req, res) => {
  try {
    const { regNo } = req.params;
    const updatedFields = req.body;

    console.log('Received patch request for regNo:', regNo);
    console.log('Updated student data:', updatedFields);

    const [updatedRowCount] = await Student.update(updatedFields, {
      where: { regNo: regNo }
    });

    if (updatedRowCount > 0) {
      res.json({ success: true, message: 'Student updated successfully' });
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    console.error('Error updating student:', error);
    res.status(500).json({ error: 'An error occurred', details: error.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (student) {
      await student.destroy();
      res.json({ message: 'Student deleted successfully' });
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred', details: error.message });
  }
};
