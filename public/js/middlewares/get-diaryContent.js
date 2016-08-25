import request from "superagent";

export default store => next => action => {
  if (action.type === 'GET_CONTENT') {
    request.post('/diaryContent')
      .send({index: action.index})
      .end((err, res) => {
        next({type: 'SET_CONTENT', diaryContent: res.body})
      });
  }
  else
    next(action);
};