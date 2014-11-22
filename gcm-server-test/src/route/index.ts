import express = require('express');

var router = express.Router();
router
    
    .get('/', function (req, res) {
    res.json({
        msg: 'Hello Android!'
    });
});

export = router;
