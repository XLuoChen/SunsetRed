const url = require('../helpers/get-url');
const MongoClient = require('../helpers/mongodb');

function findData(callback) {
  MongoClient.connect(url, function (err, db) {
    const collection = db.collection('happinessCol');
    collection.find({}, {_id: 0}).toArray(function (err, result) {
      const allHappiness = result.map(happinessItem => {
        return {
          name: happinessItem.name,
          image: `../../images/happiness-pictures/${happinessItem.image}`,
          text: happinessItem.text,
          likedCount: happinessItem.likedCount
        };
      });

      let filterHappiness = [];
      const filterCount = 6;

      if (allHappiness.length > filterCount) {
        filterHappiness = randomFilterHappiness(allHappiness, filterCount);
      } else {
        filterHappiness = allHappiness;
      }
      callback(filterHappiness);
    });
  });
}

function randomFilterHappiness(happiness, filterCount) {
  happiness.sort(() => {
    return Math.random() > 0.5 ? -1 : 1;
  });

  return happiness.slice(0, filterCount);
}

module.exports = findData;
