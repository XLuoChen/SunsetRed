import request from 'superagent';

export default store => next => action => {
  if (action.type === 'SET_FRIENDS') {
    request.get('/friends')
      .end((err, res) => {
        next({type: action.type, value: res.body})
      });
  } else if (action.type === "SEARCH") {
    request.post('/friends')
      .send({condition: action.condition})
      .end((err, res) => {
        next({type: "SET_FRIENDS", value: res.body})
      });
  }
  else {
    next(action);
  }
};
