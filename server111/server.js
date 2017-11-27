const express = require('express');
const http = require('http');
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');
const app = express();

const routes = require('./app/routes');
const db = require('./config/db');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Fix error: No 'Access-Control-Allow-Origin'
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);
    routes(app, database);

    app.listen(port, () => {
        console.log('Live on port ' + port);
    });
});