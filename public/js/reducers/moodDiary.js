function reducer(state = {moodDiary:[]}, action) {
  switch(action.type){
    case "SET_DIARIES":
      return {
        moodDiary : [{name:'baiying',title:'我的心情',content:'我很好',sort:'情感天地'}]
      };
  }
  return state;
}

module.exports = reducer;