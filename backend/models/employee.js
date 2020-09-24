const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {

    organizationName: {type: String},
    departmentName: {type: String},
    firstName: {type: String},
    lastName: {type: String},
    DOB: {type: String},
    workTitle: {type: String}
});

module.exports = { Employee };