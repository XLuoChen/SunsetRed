function reducer(state = {moodDiaries: []}, action) {
  switch (action.type) {
    case "SET_DIARIES":

      return {
        moodDiaries: action.moodDiaries
      };
  }

  return state;
}

module.exports = reducer;