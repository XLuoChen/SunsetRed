const reducer = require('../../public/js/reducers/follow-friend');
const expect = require('chai').expect;

describe('friend', ()=> {
  it('can be followed', () => {
    const state = {following: []};
    const following = [
      "18829291857",
      "15091671302"
    ];
    const action = {type: "SET_FOLLOW_FRIENDS", following};
    expect(reducer(state, action)).to.be.deep.equal({following});
  });
});


