import path = require('path');

var config = {
    port: 80,
    accessLogPath: path.join(__dirname, '../log', 'access.log')
}

export = config;