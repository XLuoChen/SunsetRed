const reducer = require('../../public/js/reducers/moodDiary');
const expect = require('chai').expect;

describe('moodDiary', function () {
  it('can change MoodDiaries', function () {
    const state = {moodDiaries: []};
    const action = {
      type: "SET_DIARIES",
      moodDiaries: [{name: 'baiying', title: '我的心情', content: '我很好', sort: '情感天地'}]
    };
    expect(reducer(state, action)).to.deep.equal({
      moodDiaries: [{
        name: 'baiying',
        title: '我的心情',
        content: '我很好',
        sort: '情感天地'
      }]
    });
  });
});

