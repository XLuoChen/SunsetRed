import request from "superagent";

export default store => next => action => {
  if (action.type === 'GET_DIARIES') {
    request.post('/diary')
      .end((err, res) => {
        next({type: 'SET_DIARIES', moodDiaries: res.body});
      });
  }
  else
    next(action);
};