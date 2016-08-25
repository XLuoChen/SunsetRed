import request from "superagent";

export default store => next => action => {
  if (action.type === 'GET_CONTENT') {
    request.post('/diary')
      .send({userId:parseInt(action.userId)})
      .end((err, res) => {
        next({type: 'SET_CONTENT', diaryContent: res.body[0]})
      });
  }
  else
    next(action);
};