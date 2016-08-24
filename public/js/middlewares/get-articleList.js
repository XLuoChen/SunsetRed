import request from 'superagent';

export default store => next => action => {
  if (action.type === 'GET_ARTICLES') {
    request.get('/traveller')
      .end((err, res) => {
        next({type: 'ARTICLE_LIST', articles: res.body});
      });
  }
  else
    next(action);
};