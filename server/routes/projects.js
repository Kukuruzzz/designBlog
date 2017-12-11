var express = require('express');
var router = express.Router();
var multer = require('multer');
var DIR = '../public/images';
var upload = multer({ dest: DIR }).single('photo');

var bodyParser = require('body-parser');

// router.get();

router.post('/', (req, res, next) => {
    var path = '';

    upload(req, res, (err) => {
        if (err) {
            console.log(err);
            return res.status(422).send('An error occured');
        } else {
            path = req.file.path;
            return res.send('Upload conplited for ' + path);
        }
    });
});

module.exports = router;