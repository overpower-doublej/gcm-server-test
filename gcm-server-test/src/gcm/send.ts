var gcm = require('node-gcm');

function send(regId: string, callback: (result) => void) {
    // create a message with default values
    //var message = new gcm.Message();

    // or with object values
    var message = new gcm.Message({
        collapseKey: 'demo',
        delayWhileIdle: true,
        timeToLive: 3,
        data: {
            key1: '안녕하세요.',
            key2: 'saltfactory push demo'
        }
    });

    var server_access_key = 'AIzaSyD8d4J6MnN1htX2XxSjFl9BVWOb-txMPJc';
    var sender = new gcm.Sender(server_access_key);
    var registrationIds = [];
    registrationIds.push(regId);

    /**
     * Params: message-literal, registrationIds-array, No. of retries, callback-function
     **/
    sender.send(message, registrationIds, 4, function (err, result) {
        if (err) return console.error(err);
        callback(result);
    });

}

export = send;