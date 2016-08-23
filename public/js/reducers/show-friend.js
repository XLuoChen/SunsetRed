function reducer(state = {value: []}, action) {
  switch (action.type) {
    case "SET_FRIENDS":
      return {
        value: action.value
      };
  }
  return state;
}

module.exports = reducer;