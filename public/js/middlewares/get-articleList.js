import {request} from 'superagent';

export default store => next => action => {
  if (action.type === 'GET_ARTICLES') {
    request.get('/traveller')
      .end((err, res) => {
        // console.log(res.body);
        next({type: 'ARTICLE_LIST', articles: res.body});
      });
  }
  else
    next(action);
};