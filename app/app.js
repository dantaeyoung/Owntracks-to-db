var config = require('./config/config');

console.log("+++++++++++ ABILITIES");
var abilities = {};

console.log("+adding+ webserver");
abilities.webserver = new (require('./abilities/webserver'))(config);

console.log("+adding+ database");
abilities.database = new (require('./abilities/database'))(config);


function add_behaviors() {

  console.log("+++++++++++ BEHAVIORS");

  console.log("+adding+ owntracks_http_server");
  new (require('./behavior/owntracks_http_server'))(config, abilities);

}

// this is messy.. TODO wrap all inits into single function
abilities.database.init().then(() => {
  add_behaviors()
})

console.log("= RUNNING!");


