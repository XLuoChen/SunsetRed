const expect = require('chai').expect;
const traveller = require('../../public/js/reducers/traveller.js');

describe('traveller', () => {
  it('update articles', () => {
    const state = {articles: []};
    const articles = [{
      title: "首尔作家开的咖啡馆",
      content: "也许我永远也不会拥有这样的一间咖啡馆，即使是为流浪者所设计的，因为对一个旅行者来说，没有什么地方值得永久停留。所以，旅行者更像是在经历一种修行",
      author: "tom",
      date: "2016-8-22",
      likedCount: 32,
      commentCount: 13
    }];
    const action = {type: 'ARTICLE_LIST', articles};
    expect(traveller(state, action)).to.be.deep.equal({articles});
  });
});
