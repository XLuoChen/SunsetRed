const reducer = require('../../public/js/reducers/show-happiness');
const expect = require('chai').expect;

describe('happiness', function () {
  it('can show', function () {
    const state = {filterHappiness: []};
    const action = {
      type: "SET_HAPPINESS",
      data: {
        name: "Jake", image: "../../public/images/happiness-pictures/a.jpg",
        text: "晒幸福", likedCount: 20
      }
    };
    expect(reducer(state, action)).to.be.deep.equal({
      data: {
        name: "Jake",
        image: "../../public/images/happiness-pictures/a.jpg",
        text: "晒幸福", likedCount: 20
      }
    });
  })
});