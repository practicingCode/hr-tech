const mongoose = require('mongoose');

var Department = mongoose.model('Department', {

    organizationName: {type: String},
    departmentName: {type: String},
    description: {type: String},
    workingTime: {type: String},
    workingDays: {type: String}
});

module.exports = { Department };