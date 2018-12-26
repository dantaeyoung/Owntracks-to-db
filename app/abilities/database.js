var assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

class database {

  constructor(config) {
    this.config = config;
    this.db = {};
  }

  init() {
    var self = this;
    return new Promise(function(resolve, reject) {
      MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);

        console.log("Connected successfully to server");
        var db = client.db(self.config.database.name)
        self.db.owntracks = db.collection(self.config.database.owntracks_collection)
        resolve();
      });
    });

  }

}

module.exports = database ;

