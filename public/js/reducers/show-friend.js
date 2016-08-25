function reducer(state = {friends: [],promptMessage:''}, action) {
  switch (action.type) {
    case "SET_FRIENDS":
      return {
        friends: action.friends
      };
    case "PROMPT_MESSAGE":
      return {friends:action.friends,promptMessage:action.promptMessage}
  }
  return state;
}

module.exports = reducer;