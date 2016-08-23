import request from 'superagent';

export default store => next => action => {
  if (action.type === 'SET_FRIENDS') {
    request.get('/friends')
      .end((err, res) => {
        console.log(res.body);
        next({type: action.type, value: res.body})
      });
  }
  else{
    console.log("elese");
    next(action);

  }
};
