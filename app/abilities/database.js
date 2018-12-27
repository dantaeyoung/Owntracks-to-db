var assert = require('assert');
const MongoClient = require('mongodb').MongoClient;

class database {

  constructor(config) {
    this.config = config;
    this.db = {};
    this.url = `mongodb://${config.database.user}:${config.database.pwd}@${config.database.host}:${config.database.port}/${config.database.dbname}`;
  }

  init() {
    var self = this;
    return new Promise(function(resolve, reject) {
      MongoClient.connect(self.url, { useNewUrlParser: true }, function(err, client) {
        assert.equal(null, err);

        console.log("Connected successfully to server");
        var db = client.db(self.config.database.dbname)
        self.db.owntracks = db.collection(self.config.database.owntracks_collection)
        resolve();
      });
    });

  }

}

module.exports = database ;

