var ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
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
    app.post('/contacts', (req, res) => {
        const contact = { text: req.body.body, title: req.body.title };
        db.collection('contacts').insert(contact, (err, result) => {
            if (err) {
                res.send({ 'error': 'We have an error!'});
            } else {
                res.send(result.ops[0]);
            }
        });
    });
    app.delete('/contacts/:id', (req, res) => {
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