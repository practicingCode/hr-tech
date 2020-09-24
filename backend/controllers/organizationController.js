const { response } = require('express');
const express = require('express');
var router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;
var { Organization } = require('../models/organization');

router.get('/', (req, res) => {
    Organization.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retrieveing Organizations: ' +JSON.stringify(err, undefined, 2)); }
    });
});

//=========
// CREATE
router.post('/', (req, res) => {
    var org = new Organization({
        organizationName: req.body.organizationName,
        owner: req.body.owner,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country
    });
    org.save((err, doc) => { 
        if (!err) { res.send(doc); }
        else { console.log('Error in Organization Save :' + JSON.stringify(err, undefined,2 )); }
    });
});

//=========
// READ
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Record with given id : ${ req.params.id }`);
    
    Organization.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Reterieving Organization :' + JSON.stringify(err, undefined,2 )); }
    });
});

//=========
// Update
router.put('/:id', (req,res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    var org = {
        organizationName: req.body.organizationName,
        owner: req.body.owner,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country
    };

    Organization.findByIdAndUpdate(req.params.id, { $set: org }, { new: true}, (err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Organization Update : ' + JSON.stringify(err, undefined, 2)); }
    });
});

//=========
//Delete
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    
    Organization.findByIdAndDelete(req.params.id, (err, doc) => {
        if (!err) {res.send(doc);}
        else { console.log('Error in Organization Delete: ' + JSON.stringify(err, undefined, 2)); }
    });
    
});


module.exports = router;