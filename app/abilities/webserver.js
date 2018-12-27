var express = require('express');
var basicAuth = require('express-basic-auth');
var bodyParser = require('body-parser');

module.exports = function(config) {

    console.log(config.webserver.username);

    var webserver = express();

    var username = config.webserver.username;
    var password = config.webserver.password;
  var logger = function(req, res, next) {
        console.log("GOT REQUEST !");
//    console.log(req);
        next(); // Passing the request to the next handler in the stack.
  }
  webserver.use(logger);



/*
    webserver.use(basicAuth({
    //  "users": { config.webserver.username : config.webserver.password }
      "users": { "abc": "123" } //username : password }
    }));
*/


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

