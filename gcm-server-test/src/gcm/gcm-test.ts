var gcm = require('node-gcm');

// create a message with default values
var message = new gcm.Message();

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

var registration_id = 'APA91bEebW2AwCjzpD08f3oP_8CLNRxdxwBxLBw_od6xe-6WSA9MFVdVob0KlXUkebE74hLrk9zP9buvVQPD6IM38ExBWmRwmwJxLQb3D7-zaqXjL7M4KW6gpwpsIn_ITPQLNwMA0dTgxAxXXUhp2VmwM-JXLZGBmYC98fz2ZERvaQ4BPTvy6XU';
// At least one required
registrationIds.push(registration_id);

/**
 * Params: message-literal, registrationIds-array, No. of retries, callback-function
 **/
sender.send(message, registrationIds, 4, function (err, result) {
    console.log(result);
});