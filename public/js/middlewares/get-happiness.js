import request from 'superagent';

export default store => next => action => {
  if (action.type === 'GET_HAPPINESS') {
    request.get('/happiness')
      .end((err, res) => {
        next({type: 'SET_HAPPINESS', data: res.body})
      });
  }
  else
    next(action);
};
