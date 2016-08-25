function reducer(state = {following: []}, action) {
  switch (action.type) {
    case "SET_FOLLOW_FRIENDS":
      return {
        following: action.following
      };
  }
  return state;
}

module.exports = reducer;