const url = require('../helpers/get-url');
const MongoClient = require('../helpers/mongodb');

function insertData(data, callback) {
  MongoClient.connect(url, (err, db) => {
    const collection = db.collection('travellersCol');
    const article = {
      title: data.title,
      image: '1.jpg',
      content: data.content,
      author: 'jack',
      date: new Date().toLocaleDateString(),
      likedCount: 0,
      commentCount: 0
    };
    collection.updateOne({}, {$push: {articles: article}}, (err, result) => {
      collection.find({}, {_id: 0}).toArray((err, result) => {
        callback(result[0].articles);
      });
    });

  });
}

module.exports = insertData;
