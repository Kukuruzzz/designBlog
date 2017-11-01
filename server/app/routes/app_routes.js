var ObjectID = require('mongodb').ObjectID;
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var key = require('../../config/token_key');

module.exports = function (app, db) {
    app.post('/login', bodyParser.json(), (req, res) => {
        const user = { username: req.body.username, password: req.body.password };
        if(user.username === 'admin' && user.password === 'admin') {
            const token = jwt.sign({ user }, key.toString());
            res.json({ token: token });
        } else {
            res.send('error');
        }
    });
    app.get('/contacts', ensureToken, (req, res) => {
        jwt.verify(req.token, key.toString(), (err, data) => {
            if (err) {
                res.sendStatus(403);
            } else {
                db.collection('contacts')
                    .find().toArray((err, items) => {
                    if (err) {
                        res.sendStatus(403);
                    } else {
                        res.send(items);
                    }
                });
            }
        })
    });
    app.get('/contacts/:id', (req, res) => {
        const id = req.params.id;

        const details = { '_id': new ObjectID(id) };
        db.collection('contacts').findOne(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error!'});
            } else {
                res.send(item);
            }
        });
    });
    // Fix json.body is empty error: bodyParser is required param
    app.post('/contacts', bodyParser.json(), (req, res) => {
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
    app.delete('/contacts/:id', bodyParser.json(), (req, res) => {
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
    app.put('/contacts/:id', (req, res) => {
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
};