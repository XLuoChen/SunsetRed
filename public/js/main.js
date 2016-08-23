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
import setHappiness from "./middlewares/set-happiness";
import HappinessShare from './containers/HappinessShare';
import showHappiness from './reducers/show-happiness';

const createStoreWithMiddleware = applyMiddleware(setHappiness)(createStore);

const store = createStoreWithMiddleware(showHappiness);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="/hello" component={Hello}/>
        <Route path="/happiness" component={HappinessShare}/>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));

export {store}