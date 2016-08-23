import request from 'superagent';

export default store => next => action => {
  if (action.type === 'SET_FRIENDS') {
    request.get('/friends')
      .end((err, res) => {
        next({type: action.type, value: res.body})
      });
  }
  else{
    next(action);
  }
};
