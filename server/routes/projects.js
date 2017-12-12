var express = require('express');
var router = express.Router();
var multer = require('multer');
var DIR = '../public/images';
var upload = multer({ dest: DIR });

var bodyParser = require('body-parser');

// router.get();

router.post('/', (req, res, next) => {
    upload(req, res, (err) => {
        if (err) {
          return res.end(err.toString());
        }
     
        res.end('File is uploaded');
      });
});

module.exports = router;