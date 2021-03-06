var express = require('express');
var fs = require('fs');

var router = express.Router();

router.get('/', function(req, res, next) {

    fs.readFile('./views/signup.html', function(error, content) {
        if (error) {
            res.writeHead(500);
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }
    });

});

module.exports = router;
