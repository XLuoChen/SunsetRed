const request = require('supertest');
const url = require('../../server/helpers/get-url');
const mongoClient = require('../../server/helpers/mongodb');

describe('server', () => {
  let server;

  beforeEach((done)=> {
    mongoClient.connect(url, (err, db)=> {
      const collection = db.collection('diarycol');
      collection.removeMany({}, () => {
        collection.insertOne([{name: "baiying", title: "我的心情", content: "我很好", sort: "情感天地"}], (err, result)=> {
          db.close();
          done();
        });
      });
    });
    server = require('../../server');
  });

  it('responds to /moodDiaries', (done)=> {
    request(server)
      .get('/moodDiaries')
      .expect(200, '[{"name":"baiying","title":"我的心情","content":"我很好","sort":"情感天地"}]', done);
  });
});
