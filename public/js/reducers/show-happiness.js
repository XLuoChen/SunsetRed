function reducer(state = {filterHappiness: []}, action) {
  switch (action.type) {
    case "SET_HAPPINESS":
      return {
        data: action.data
      };
  }

  return state;
}

module.exports = reducer;