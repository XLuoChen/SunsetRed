import React, {Component} from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import App from "./containers/App";
import MakeFriends from "./containers/MakeFriends";
import HappinessShare from "./containers/HappinessShare";
import MoodDiaries from "./containers/MoodDiaries";
import Traveller from "./containers/Traveller";
import HomePage from "./components/HomePage";
import getFriendsInformation from "./middlewares/get-friend-information";
import setHappiness from "./middlewares/set-happiness";
import getArticleList from './middlewares/get-articleList'
import MooddDiarylists from "./middlewares/get-diaryLists";
import reducer from "./reducers/index";

const createStoreWithMiddleware = applyMiddleware(getFriendsInformation,setHappiness,getArticleList,MooddDiarylists)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="/friends" component={MakeFriends}/>
        <Route path="/happiness" component={HappinessShare}/>
        <Route path='/moodDiary' component={MoodDiaries}/>
        <Route path="/traveller" component={Traveller}/>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));

export {store}
