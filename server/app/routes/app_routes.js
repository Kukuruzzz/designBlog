var ObjectID = require('mongodb').ObjectID;
var bodyParser = require('body-parser');

module.exports = function (app, db) {
    app.post('/login', (req, res) => {
        let user = { username: req.body.username, password: req.body.password };
        if(user.username == 'admin' && user.password == 'admin') {
            res.send(true)
        } else {
            res.send('error');
        }
    });
    app.get('/contacts', (req, res) => {
        db.collection('contacts')
            .find().toArray((err, items) => {
            if (err) {
                console.log({ 'error': 'An error!' });
            } else {
                res.send(items);
            }
        });
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
};