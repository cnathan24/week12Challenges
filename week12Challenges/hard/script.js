
var express = require('express');
var app = express();
var data = require('./empstats.json');


app.get('/employees', (req,res) => {
    if(!data) {
        res.status(404).send('Could not find information');
    }
    res.send(data)
 });


app.get('/employees/:id', (req,res) => {

    const findEmployee = data.employees.find((employee) => {
        return parseInt(req.params.id) === employee.id;
    });
    if (!findEmployee) {
        res.status(404).send('Could not find employee');
    }

    res.send(findEmployee);
});

const port = process.env.port || 2000;

app.listen(2000);