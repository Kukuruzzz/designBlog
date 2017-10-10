const express = require('express');
const http = require('http');
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');
const app = express();

const routes = require('./app/routes');
const db = require('./config/db');
const port = 3000;

app.use(bodyParser.urlencoded({ extend: false }));
MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);
    routes(app, database);
    app.listen(port, () => {
        console.log('Live on port ' + port);
    });
});