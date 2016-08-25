const reducer = require('../../public/js/reducers/show-friend');
const expect = require('chai').expect;

describe('friend', function () {
  it('can show', function () {
    const state = {friends: []};
    const friends = [
      {
        name: "gaole",
        sex: "女",
        city: "西安"
      }
    ];
    const action = {type: "SET_FRIENDS", friends};
    expect(reducer(state, action)).to.be.deep.equal({friends});
  })
});


