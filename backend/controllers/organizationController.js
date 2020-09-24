const { response } = require('express');
const express = require('express');
var router = express.Router();

var { Organization } = require('../models/organization');

router.get('/', (req, res) => {
    Organization.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retrieveing Organizations: ' +JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;