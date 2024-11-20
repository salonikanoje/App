const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    title: String,
    firstName: String,
    middleName: String,
    lastName: String,
    department: String,
    facultyId: String,
    joiningDate: String,
    designation: String,
    email: String
});

module.exports = mongoose.model('User', userSchema);