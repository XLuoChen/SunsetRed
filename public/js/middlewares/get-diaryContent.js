import request from "superagent";

export default store => next => action => {
  if (action.type === 'GETCONTENT') {
    request.post('/diaryContent')
      .send({index:action.index})
      .end((err, res) => {
        next({type: action.type, diaryContent:res.body})
      });
  }
  else
    next(action);
};