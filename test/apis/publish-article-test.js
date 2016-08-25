const request = require('supertest');
const url = require('../../server/helpers/get-url');

describe('publication', ()=> {
  let server;
  let articles;

  beforeEach(()=> {
    articles = [
      {
        title: "漂浮而不沉没",
        content: "聪明人不会因为别人的坏而惩罚自己，在法国人看来，如果放弃了自己热爱的生活方式，被恐怖分子吓到，那就是愚蠢。 而我，一个时不时旅居在法国的中国人，谈到恐袭时常常想到的是，哪里没有危险呢？",
        author: "高乐",
        date: new Date().toLocaleDateString(),
        likedCount: 0,
        commentCount: 0
      }];

    server = require('../../server');
  });

  it('responds to /publication', (done) => {
    request(server)
      .post('/publication')
      .send({
        title: '漂浮而不沉没',
        content: '聪明人不会因为别人的坏而惩罚自己，在法国人看来，如果放弃了自己热爱的生活方式，被恐怖分子吓到，那就是愚蠢。 而我，一个时不时旅居在法国的中国人，谈到恐袭时常常想到的是，哪里没有危险呢？'
      })
      .expect(200, articles, done)
  });
});