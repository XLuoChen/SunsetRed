import request from 'superagent';

export default store => next => action => {
  if (action.type === 'PUBLISH_ARTICLE') {
    request.post('/traveller')
      .send({title: action.title, content: action.content})
      .end((err, res) => {
        next({type: action.type, articles: res.body});
      });
  }
  else
    next(action);
}