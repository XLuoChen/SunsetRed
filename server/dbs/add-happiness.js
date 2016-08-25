const url = require('../helpers/get-url');
const MongoClient = require('../helpers/mongodb');

function addData(req, callback) {
  MongoClient.connect(url, function (err, db) {
    const collection = db.collection('happinessCol');
    let happiness;
    collection.find({}, {_id: 0}).toArray(function (err, result) {
      let imageNumber = '00000001';
      const imageNameLength = '00000000';

      if (result && result.length !== 0) {
        const image = result.splice(-1, 1)[0].image.split('.');
        imageNumber = (parseInt(image[0]) + 1).toString();
        imageNumber = imageNameLength.substring(0, imageNameLength.length - imageNumber.length) + imageNumber;
      }

      happiness = {
        name: req.body.name,
        image: `${imageNumber}.${req.body.imageType}`,
        text: req.body.text,
        likedCount: "0"
      };
      collection.insert(happiness, function (err, result) {
        if (err) {
          console.log("Error" + err);
        }
      });
      callback(imageNumber);
    });
  });
}

module.exports = addData;
