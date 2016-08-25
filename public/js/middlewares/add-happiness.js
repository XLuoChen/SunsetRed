import request from 'superagent';

export default store => next => action => {
  if (action.type === 'ADD_HAPPINESS') {
    request.post('/happinessPublish')
      .send({name: action.name, text: action.text,imageType:action.imageType})
      .end((err, res) => {
        next({type: action.type, data: res.body});
        if(res.statusCode==="200"){
          alert("提交成功");
        }else {
          alert("提交失败");
        }
      });
  }
  else
    next(action);
};
