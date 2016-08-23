import React, {Component} from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from "./containers/App";
import reducer from "./reducers/index";
import HomePage from './components/HomePage';
import getArticles from "./middlewares/get-articleList";
import MoodDiaries from "./containers/MoodDiaries";
import Traveller from './containers/Traveller';

const createStoreWithMiddleware = applyMiddleware(getArticles)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path='/moodDiary' component={MoodDiaries}/>
        <Route path="/traveller" component={Traveller}/>
      </Route>
    </Router>

  </Provider>
  , document.getElementById('app'));

export {store}
