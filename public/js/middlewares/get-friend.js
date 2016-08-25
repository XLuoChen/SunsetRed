import request from 'superagent';

export default store => next => action => {
  if (action.type === 'GET_FRIENDS') {
    request.get('/friends')
      .end((err, res) => {
        next({type: "SET_FRIENDS", friends: res.body})
      });
  } else if (action.type === "SEARCH") {
    request.get('/findFriends')
      .query({condition: action.condition})
      .end((err, res) => {
        if (res.body.length == 0) {
          next({type: "PROMPT_MESSAGE", friends: res.body,promptMessage: '没有找到符合条件的好友'})
        }else{
          next({type: "SET_FRIENDS", friends: res.body});
        }
      });
  }
  else {
    next(action);
  }
};
