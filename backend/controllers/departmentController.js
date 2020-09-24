const { response } = require('express');
const express = require('express');
var router = express.Router();

var { Department } = require('../models/department');

router.get('/', (req, res) => {
    Department.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retrieveing Departments: ' +JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;