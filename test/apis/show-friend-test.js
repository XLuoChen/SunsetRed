const request = require('supertest');
const url = require('../../server/helpers/get-url');
const mongoClient = require('../../server/helpers/mongodb');

describe('server', () => {
  let server;

  const defaultFriends = [
    {name: "高乐", sex: "女", city: "西安"},
    {name: "黄丽珍", sex: "女", city: "西安"},
    {name: "赵路", sex: "女", city: "西安"},
    {name: "刘一林", sex: "女", city: "西安"}];

  beforeEach(function (done) {
    mongoClient.connect(url, (err, db)=> {
      const collection = db.collection('friends');
      collection.removeMany({}, () => {
        collection.insert(defaultFriends, (err, result)=> {
          db.close();
          done();
        });
      });
    });

    server = require('../../server');
  });

  it('responds to /friends', function testSlash(done) {
    request(server)
      .get('/friends')
      .expect(200, '[{"name":"高乐","sex":"女","city":"西安"},{"name":"黄丽珍","sex":"女","city":"西安"},{"name":"赵路","sex":"女","city":"西安"},{"name":"刘一林","sex":"女","city":"西安"}]', done);
  });
});
