function reducer(state = {diaryContent: {}}, action) {
  switch (action.type) {
    case "GETCONTENT":
      return {
        diaryContent: action.diaryContent
      };
  }
  return state;
}

module.exports = reducer;