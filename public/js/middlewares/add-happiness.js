import request from 'superagent';

export default store => next => action => {
  if (action.type === 'ADD_HAPPINESS') {
    request.post('/happinessPublish')
      .send({name: action.name, text: action.text,imageType:action.imageType})
      .end((err, res) => {
        next({type: action.type, data: res.body});
      });
  }
  else
    next(action);
};
