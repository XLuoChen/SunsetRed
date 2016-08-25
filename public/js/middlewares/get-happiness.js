import request from 'superagent';

export default store => next => action => {
  if (action.type === 'SET_HAPPINESS') {
    request.get('/happiness')
      .end((err, res) => {
        next({type: action.type, data: res.body})
      });
  }
  else
    next(action);
};
