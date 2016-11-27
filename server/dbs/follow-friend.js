const url = require('../helpers/get-url');
const MongoClient = require('../helpers/mongodb');

function followFriend(id, callback) {
  MongoClient.connect(url, (err, db)=> {
    const collection = db.collection('friendsCol');
    collection.find({}, {_id: 0}).toArray((err, result) => {
      if(result.length == 0){
        const ids = [];
        ids.push(id);
        collection.insertOne({follow:ids},()=>{
          callback(result);
        });
      }else{
        collection.update({},{$addToSet:{follow:id}},()=>{
          callback(result);
        });
      }
    });
  });
}

module.exports = followFriend;
