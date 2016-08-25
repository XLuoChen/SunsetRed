function reducer(state = {moodDiaries: [], diaryContent: {}}, action) {

  switch (action.type) {
    case "SET_DIARIES":

      return Object.assign({}, state, {
        moodDiaries: action.moodDiaries
      });
    case "SET_CONTENT":
      return Object.assign({}, state, {
        diaryContent: action.diaryContent
      });
  }

  return state;
}

module.exports = reducer;