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

  beforeEach(function () {
    mongoClient.connect(url, (err, db)=> {
      const collection = db.collection('hello');
      collection.insert(defaultFriends, (err, result)=> {
      });
      db.close();
    });
    server = require('../../server');
  });

  afterEach(function () {
    mongoClient.connect(url, (err, db)=> {
      const collection = db.collection('hello');
      collection.removeMany({});
      db.close();
    })
  });

  it('responds to /friend', function testSlash(done) {
    request(server)
      .get('/friend')
      .expect(200, '[{"name":"高乐","sex":"女","city":"西安"},{"name":"黄丽珍","sex":"女","city":"西安"},{"name":"赵路","sex":"女","city":"西安"},{"name":"刘一林","sex":"女","city":"西安"}]', done);

  });

  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});
