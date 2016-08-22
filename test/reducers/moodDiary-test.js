const reducer = require('../../public/js/reducers/moodDiary');
const expect = require('chai').expect;

describe('moodDiary', function () {
  it('can get', function () {
    const state = {moodDiary: []};
    const action = {type: "SET_DIARIES"};
    expect(reducer(state, action)).to.be.deep.equal({moodDiary: [{name:'baiying',title:'我的心情',content:'我很好',sort:'情感天地'}]});
  });
});

