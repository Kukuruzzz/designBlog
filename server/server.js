const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');
const routes = require('./app/routes');
const db = require('./config/db');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extend: true }));
MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);
    routes(app, database);
    app.listen(port, () => {
        console.log('Live on port ' + port);
    });
});