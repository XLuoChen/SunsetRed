import React, {Component} from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from "./containers/App";
import Hello from './containers/Hello';
import reducer from "./reducers/reducer";
import HomePage from './components/HomePage';
import getValue from "./middlewares/get-value";
import MakeFriends from './containers/MakeFriends';
import getFriendsInformation from './middlewares/get-friend-information';
import showFriend from './reducers/show-friend-test';

const createStoreWithMiddleware = applyMiddleware(getValue, getFriendsInformation)(createStore);

const store = createStoreWithMiddleware(showFriend);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="/hello" component={Hello}/>
        <Route path="/friends" component={MakeFriends}/>
      </Route>
    </Router>

  </Provider>
  , document.getElementById('app'));

export {store}
