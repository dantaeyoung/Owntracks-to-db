var express = require('express');
var basicAuth = require('express-basic-auth');
var bodyParser = require('body-parser');

module.exports = function(config) {

    console.log(config.webserver.username);

    var webserver = express();

    var authsettings =  {};
    authsettings.users = {};
    authsettings.users[config.webserver.username] = config.webserver.password;
    
    webserver.use(basicAuth(authsettings));

      // Parse request bodies
    webserver.use(bodyParser.json());
    webserver.use(bodyParser.urlencoded({ extended: true }));
    // Setup a static directory 'public', totally optional
    webserver.use(express.static('app/public'));

    webserver.on('error', console.log);
    webserver.listen(config.webserver.port, function() {
        console.log('Express webserver configured and listening!')
    });



    return webserver;
}

