function reducer(state = {following: []}, action) {
  switch (action.type) {
    case "FOLLOW_FRIENDS":
      return {
        following: action.following
      };
  }
  return state;
}

module.exports = reducer;