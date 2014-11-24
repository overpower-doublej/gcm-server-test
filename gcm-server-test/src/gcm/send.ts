var gcm = require('node-gcm');
import configAll = require('../config');
var config = configAll.gcm;

function send(regId: string, res: Object, callback: (result) => void) {
    // Create a message
    var gcmMsg = new gcm.Message(res);
    // Setup sender
    var sender = new gcm.Sender(config.SERVER_ACCESS_KEY);
    // Setup target device's registration id as array form
    var regIds = [regId];
    /**
     * Params: message-literal, registrationIds-array, No. of retries, callback-function
     **/
    sender.send(gcmMsg, regIds, 4, function (err, result) {
        if (err) return console.error(err);
        callback(result);
    });

}

export = send;