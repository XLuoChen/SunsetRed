function reducer(state = {diaryContent: {}}, action) {
  switch (action.type) {
    case "SET_CONTENT":

      return {
        diaryContent: action.diaryContent
      };
  }

  return state;
}

module.exports = reducer;