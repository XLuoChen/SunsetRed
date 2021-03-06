const expect = require('chai').expect;
const publishArticle = require('../../public/js/reducers/publish-article');

describe('publish article', () => {
  it('changes articles', () => {
    const state = {
      articles: []
    };
    const articles = {
      title: "漂浮而不沉没",
      content: "聪明人不会因为别人的坏而惩罚自己，在法国人看来，如果放弃了自己热爱的生活方式，被恐怖分子吓到，那就是愚蠢。 而我，一个时不时旅居在法国的中国人，谈到恐袭时常常想到的是，哪里没有危险呢？",
      author: "高乐",
      date: '8/25/2016',
      likedCount: 0,
      commentCount: 0
    };
    const action = {type: 'PUBLISH_ARTICLE', articles};

    expect(publishArticle(state, action)).to.be.deep.equal({articles});
  });
});