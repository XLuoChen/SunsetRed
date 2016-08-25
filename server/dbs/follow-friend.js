const url = require('../helpers/get-url');
const MongoClient = require('../helpers/mongodb');

function followFriend(callback) {
  MongoClient.connect(url, (err, db)=> {
    const collection = db.collection('usersCol');

    collection.find({}, {_id: 0}).toArray((err, result) => {
      callback(result);
    });
  });
}

module.exports = followFriend;
