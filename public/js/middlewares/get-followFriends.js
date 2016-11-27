import request from 'superagent';

export default store => next => action => {
  if (action.type === 'FOLLOW_FRIENDS') {
    request.post('/follow')
      .send({id:action.id})
      .end((err, res) => {
        next({type: "SET_FOLLOW_FRIENDS", following: res.body});
      });
  } if (action.type === 'CANCEL_FOLLOW'){
    request.post('/cancelFollow')
      .send({id:action.id})
      .end((err, res) => {
        next({type: "SET_FOLLOW_FRIENDS", following: res.body});
      });
  } else {
    next(action);
  }
};
