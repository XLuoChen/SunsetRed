const url = require('../helpers/get-url');
const MongoClient = require('../helpers/mongodb');

function findData(userId,callback) {
  MongoClient.connect(url, function (err, db) {
    const collection = db.collection('diarycol');
    collection.find({userId:userId}, {_id: 0}).toArray(function (err, result) {
      callback(result);
    });
  });
}

module.exports = findData;
