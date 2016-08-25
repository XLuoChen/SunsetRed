const request = require('supertest');
const url = require('../../server/helpers/get-url');
const mongoClient = require('../../server/helpers/mongodb');

describe('server', () => {
  let server;

  const defaultFriends = [{
    following: [
      "18829291857",
      "15091671302"
    ]
  }];

  beforeEach(function (done) {
    mongoClient.connect(url, (err, db)=> {
      const collection = db.collection('users');
      collection.removeMany({}, () => {
        collection.insert(defaultFriends, (err, result)=> {
          db.close();
          done();
        });
      });
    });

    server = require('../../server');
  });

  it('responds to /follow', function testSlash(done) {
    request(server)
      .post('/follow')
      .expect(200, '[{"following":["18829291857","15091671302"]}]', done);
  });
});
