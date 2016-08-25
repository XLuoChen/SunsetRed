const request = require('supertest');
const url = require('../../server/helpers/get-url');
const mongoClient = require('../../server/helpers/mongodb');

describe('server', () => {
  let server;

  const defaultHappiness = [{
    name: "Jake",
    image: "a.jpg",
    text: "晒幸福",
    likedCount: 20
  }];

  beforeEach((done) => {
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

  it('responds to /happiness', (done) => {
    request(server)
      .get('/happiness')
      .expect(200, '[{"name":"Jake","image":"../../images/happiness-pictures/a.jpg","text":"晒幸福","likedCount":20}]', done);
  });
});
