import {request} from 'superagent';
export default store => next => action => {
  if (action.type === 'SET_DIARIES') {
    request.get('/moodDiaries')
      .end((err, res) => {
        next({type: action.type, moodDiaries: res.body})
      });
  }
  else
    next(action);
};