require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./routes/index.router');

//controllers
var employeeController = require('./controllers/employeeController.js');
var departmentController = require('./controllers/departmentController.js');
var organizationController = require('./controllers/organizationController.js');

var app = express();
//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use("/api", rtsIndex);


// error handler
app.use((err, req, res, next)=>{
    if(err.name === 'ValidationError'){
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
})

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));


//controllers
app.use('/employees', employeeController);
app.use('/departments', departmentController);
app.use('/organizations', organizationController);