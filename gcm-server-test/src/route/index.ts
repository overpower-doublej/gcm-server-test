import express = require('express');

var router = express.Router();
router

    .get('/', function (req, res, next) {
        res.json({
            msg: 'Hello Android!'
        });
    })
    .get('/err', (req, res, next) => {
        return next(new Error("This is an error and it should be logged to the console"));
    });

export = router;
