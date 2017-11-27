const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const key = require('../config/token_key');

router.post('/', bodyParser.json(), (req, res) => {
    const user = { username: req.body.username, password: req.body.password };
    if(user.username === 'admin' && user.password === 'admin') {
        const token = jwt.sign({ user }, key.toString());
        res.json({ token: token });
    } else {
        res.send('error');
    }
});

// Json Wev Token verification
function jwtVerify(token) {
    jwt.verify(req.token, key.toString(), (err, data) => {
        return err ? true : false;
    });
}

module.exports = router;