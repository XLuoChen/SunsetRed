const request = require('supertest');
const url = require('../../server/helpers/get-url');
const mongoClient = require('../../server/helpers/mongodb');

describe('server', () => {
  let server;

  const defaultHappiness = [
    {name: "Jake", image: "../../public/images/happiness-pictures/a.jpg", text: "晒幸福", likedCount: 20}, {
      name: "Lily",
      image: "../../public/images/happiness-pictures/b.jpg",
      text: "晒幸福",
      likedCount: 12
    }, {name: "John", image: "../../public/images/happiness-pictures/c.jpg", text: "晒幸福", likedCount: 37}
  ];

  beforeEach(function (done) {
    mongoClient.connect(url, (err, db)=> {
      const collection = db.collection('happinessCol');
      collection.removeMany({}, () => {
        collection.insert(defaultHappiness, (err, result)=> {
          db.close();
          done();
        });
      });
    });

    server = require('../../server');
  });

  it('responds to /happiness', function testSlash(done) {
    request(server)
      .get('/happiness')
      .expect(200, '[{"name":"Jake","image":"../../public/images/a.jpg","text":"晒幸福","likedCount":20},{"name":"Lily","image":"../../public/images/b.jpg","text":"晒幸福","likedCount":12},{"name":"John","image":"../../public/images/c.jpg","text":"晒幸福","likedCount":37}]', done);
  });
});
