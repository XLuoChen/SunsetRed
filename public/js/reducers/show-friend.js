function reducer(state = {friends: []}, action) {
  switch (action.type) {
    case "SET_FRIENDS":
      return {
        friends: action.friends
      };
  }
  return state;
}

module.exports = reducer;