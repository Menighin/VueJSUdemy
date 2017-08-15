const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 8000;

app.use(bodyParser.json());

app.use('/stocks', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/state', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(port, () => {
    console.log('We are live on ' + port);
});

require('./app/routes')(app, {});