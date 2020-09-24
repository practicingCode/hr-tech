const { response } = require('express');
const express = require('express');
var router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;
var { Department } = require('../models/department');

router.get('/', (req, res) => {
    Department.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retrieveing Departments: ' +JSON.stringify(err, undefined, 2)); }
    });
});

//=========
// CREATE
router.post('/', (req, res) => {
    var dep = new Department({
        organizationName: req.body.organizationName,
        departmentName: req.body.departmentName,
        description: req.body.description,
        workingTime: req.body.workingTime,
        workingDays: req.body.workingDays
    });
    dep.save((err, doc) => { 
        if (!err) { res.send(doc); }
        else { console.log('Error in Department Save :' + JSON.stringify(err, undefined,2 )); }
    });
});

//=========
// READ
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Record with given id : ${ req.params.id }`);
    
    Department.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Reterieving Department :' + JSON.stringify(err, undefined,2 )); }
    });
});

//=========
// Update
router.put('/:id', (req,res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    var dep = {
        organizationName: req.body.organizationName,
        departmentName: req.body.departmentName,
        description: req.body.description,
        workingTime: req.body.workingTime,
        workingDays: req.body.workingDays
    };

    Department.findByIdAndUpdate(req.params.id, { $set: dep }, { new: true}, (err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Department Update : ' + JSON.stringify(err, undefined, 2)); }
    });
});

//=========
//Delete
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    
    Department.findByIdAndDelete(req.params.id, (err, doc) => {
        if (!err) {res.send(doc);}
        else { console.log('Error in Department Delete: ' + JSON.stringify(err, undefined, 2)); }
    });
    
});


module.exports = router;