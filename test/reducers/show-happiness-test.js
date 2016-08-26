const reducer = require('../../public/js/reducers/show-happiness');
const expect = require('chai').expect;

describe('happiness', ()=> {
  it('set happiness', ()=> {
    const state = {filterHappiness: []};
    const action = {
      type: "SET_HAPPINESS",
      data: [{
        name: "Jake", image: "../../images/happiness-pictures/00000001.jpg",
        text: "晒幸福", likedCount: 20
      }]
    };
    expect(reducer(state, action)).to.be.deep.equal({
      filterHappiness: [{
        name: "Jake",
        image: "../../images/happiness-pictures/00000001.jpg",
        text: "晒幸福", likedCount: 20
      }]
    });
  });
});