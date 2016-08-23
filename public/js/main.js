import React, {Component} from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from "./containers/App";
import Hello from './containers/Hello';
import reducer from "./reducers/index";
import HomePage from './components/HomePage';
import getValue from "./middlewares/get-value";
import MoodDiaries from "./containers/MoodDiaries";

import MoodDiary from './components/MoodDiaries';

const createStoreWithMiddleware = applyMiddleware(getValue)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path='/moodDiary' component={MoodDiaries}/>
        <Route path="/hello" component={Hello}/>
        <Route path="/moodDiary" component={MoodDiary}/>
      </Route>
    </Router>

  </Provider>
  , document.getElementById('app'));
