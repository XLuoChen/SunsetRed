const url = require('../helpers/get-url');
const MongoClient = require('../helpers/mongodb');

function cancelFollowFriend(id, callback) {
  MongoClient.connect(url, (err, db)=> {
    const collection = db.collection('friendsCol');
    collection.find({}, {_id: 0}).toArray((err, result) => {
        collection.update({},{$set:{follow:result[0].follow.filter(ele => ele != id)}},()=>{
          callback(result);
        });
    });
  });
}

module.exports = cancelFollowFriend;
