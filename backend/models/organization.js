const mongoose = require('mongoose');

var Organization = mongoose.model('Organization', {

    organizationName: {type: String},
    owner: {type: String},
    address: {type: String},
    city: {type: String},
    state: {type: String},
    country: {type: String}
});

module.exports = { Organization };