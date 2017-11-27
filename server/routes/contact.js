var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');

// MongoDB and Mongoose libraries
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var jwt = require('jsonwebtoken');
var key = require('../config/token_key');

// Ensure Token & JWT verification
router.use(ensureToken, (req, res, next) => {
    jwt.verify(req.token, key.toString(), (err, data) => {
        if (err) {
            res.sendStatus(403);
        } else next();
    })
});

router.get('/', ensureToken, (req, res) => {
    db.collection('contacts')
    .find().toArray((err, items) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.send(items);
        }
    });
});

// Fix json.body is empty error: bodyParser is required param
router.post('/', bodyParser.json(), (req, res) => {
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        company: req.body.company,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        comments: req.body.comments,
        date: Date.now()
    };
    db.collection('contacts').insert(contact, (err, result) => {
        if (err) {
            res.send({ 'error': 'We have an error!' });
        } else {
            res.send(result.ops[0]);
        }
    });
});
router.delete('/:id', bodyParser.json(), (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('contacts').remove(details, (err, item) => {
        if (err) {
            res.send({ 'error': 'An error!'});
        } else {
            res.send('Contacts ' + id + ' deleted');
        }
    });
});
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const contact = { text: req.body.body, title: req.body.title };

    db.collection('contacts').update(details, contact, (err, result) => {
        if (err) {
            res.send({ 'error': 'An error!'});
        } else {
            res.send(contact);
        }
    });
});

function ensureToken (req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next()
    } else {
        res.sendStatus(403);
    }
}

module.exports = router;
