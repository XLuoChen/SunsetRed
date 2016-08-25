const url = require('../helpers/get-url');
const MongoClient = require('../helpers/mongodb');

function findData(callback) {
  MongoClient.connect(url, (err, db) => {
    const collection = db.collection('traveller');
    collection.find({}, {_id: 0}).toArray((err, result) => {
      callback(result[0].articles);
    });
  });
}

module.exports = findData;
