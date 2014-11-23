import express = require('express');
import send = require('../../gcm/send');

var router = express.Router();
router

    .get('/:regId', function (req, res, next) {
        var regId = req.params['regId'];
        console.log('New registeration!');
        console.log('Registeration id: %s', regId);

        res.json({
            msg: 'Thanks for your registration!',
            regId: regId
        });

        send(regId, (result) => {
            console.log('Google Cloud Message sended');
            console.log(result);
        });
    })

export = router;
