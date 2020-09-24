const { response } = require('express');
const express = require('express');

var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Employee } = require('../models/employee');

router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retrieveing Employees: ' +JSON.stringify(err, undefined, 2)); }
    });
});
//=========
// CREATE
router.post('/', (req, res) => {
    var emp = new Employee({
        organizationName: req.body.organizationName,
        departmentName: req.body.departmentName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        DOB: req.body.DOB,
        workTitle: req.body.workTitle
    });
    emp.save((err, doc) => { 
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined,2 )); }
    });
});

//=========
// READ
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Record with given id : ${ req.params.id }`);
    
    Employee.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Reterieving Employee :' + JSON.stringify(err, undefined,2 )); }
    });
});

//=========
// Update
router.put('/:id', (req,res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    var emp = {
        organizationName: req.body.organizationName,
        departmentName: req.body.departmentName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        DOB: req.body.DOB,
        workTitle: req.body.workTitle
    };

    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true}, (err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update : ' + JSON.stringify(err, undefined, 2)); }
    });
});

//=========
//Delete
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    
    Employee.findByIdAndDelete(req.params.id, (err, doc) => {
        if (!err) {res.send(doc);}
        else { console.log('Error in Employee Delete: ' + JSON.stringify(err, undefined, 2)); }
    });
    
});


module.exports = router;