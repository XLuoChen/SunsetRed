var config = require('config');
const db = require('mongodb').MongoClient;
var dbConfig = config.get('Customer.dbConfig');

const url = `mongodb://localhost:27017/${dbConfig.dbName}`;

function findData(callback) {
  db.connect(url, function (err, db) {
    const collection = db.collection('hello');
    collection.find({}).toArray(function (err, result) {
      callback(result[0].hello);
    });
  });
}

// function findData(callback) {
//   MongoClient.connect(url, function (err, db) {
//     const collection = db.collection('hello');
//     collection.find({}).toArray(function (err, result) {
//       callback(result[0].hello);
//     });
//   });
// }

module.exports = findData;