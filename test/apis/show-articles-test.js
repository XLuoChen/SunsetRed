const request = require('supertest');
const url = require('../../server/helpers/get-url');
const mongoClient = require('../../server/helpers/mongodb');

describe('traveller', () => {
  let server;
  let defaultArticles;
  beforeEach((done) => {
    mongoClient.connect(url, (err, db) => {
      const collection = db.collection('travellersCol');
      defaultArticles = {
        articles: [{
          title: "首尔作家开的咖啡馆",
          content: "也许我永远也不会拥有这样的一间咖啡馆，即使是为流浪者所设计的，因为对一个旅行者来说，没有什么地方值得永久停留。所以，旅行者更像是在经历一种修行",
          author: "tom",
          date: "2016-8-22",
          likedCount: 32,
          commentCount: 13
        }]
      };
      collection.removeMany({}, (err, result) => {
        collection.insertOne(defaultArticles, (err, result) => {
          db.close();
          done();
        });
      });
    });
    server = require('../../server');
  });

  it('responds to /traveller', (done) => {
    request(server)
      .get('/traveller')
      .expect(200, defaultArticles.articles, done);
  });
});