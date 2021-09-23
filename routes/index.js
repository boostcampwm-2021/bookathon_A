const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', function(req, res, next) {
    res.writeHead(200, {"Content-Type" : "text/html"});
    fs.createReadStream('./views/index.html').pipe(res);
});

module.exports = router;
