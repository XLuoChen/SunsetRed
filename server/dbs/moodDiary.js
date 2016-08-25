const url = require('../helpers/get-url');
const MongoClient = require('../helpers/mongodb');

function findData(callback) {
  MongoClient.connect(url, (err, db) => {
    const collection = db.collection('diarycol');
    collection.find({}, {_id: 0}).toArray((err, result) => {
      callback(result);
    });
  });
}

module.exports = findData;
