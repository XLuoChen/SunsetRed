const url = require('../helpers/get-url');
const MongoClient = require('../helpers/mongodb');

function findData(callback) {
  MongoClient.connect(url, function (err, db) {
    const collection = db.collection('friends');
    collection.find({},{_id:0}).toArray(function (err, result) {
      callback(result);
    });
  });
}

function findFriend(condition,callback) {
  MongoClient.connect(url, function (err, db) {
    const collection = db.collection('friends');
    collection.find(condition,{_id:0}).toArray(function (err, result) {
      callback(result);
    });
  });
}

module.exports = {findData,findFriend};