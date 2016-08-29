import React from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import App from "./containers/App";
import MakeFriends from './containers/MakeFriends';
import HappinessShare from './containers/HappinessShare';
import HappinessPublish from './containers/HappinessPublish';
import addHappiness from "./middlewares/add-happiness";
import MoodDiaries from "./containers/MoodDiaries";
import Traveller from "./containers/Traveller";
import HomePage from "./components/HomePage";
import TravellerArticlePublication from './containers/TravellerArticlePublication';
import DiaryContent from './containers/DiaryContent';
import WriteDiaryPage from './containers/WriteDiaryPage';

import getFriendsInformation from "./middlewares/get-friend";
import getHappiness from "./middlewares/get-happiness";
import getArticleList from './middlewares/get-articleList';
import MoodDiaryLists from "./middlewares/get-diaryLists";
import geDiaryContent from './middlewares/get-diaryContent';
import publishTravelArticle from './middlewares/publish-travel-article';

const createStoreWithMiddleware = applyMiddleware(addHappiness, getFriendsInformation, getHappiness, MoodDiaryLists, geDiaryContent, getArticleList, publishTravelArticle)(createStore);
import reducer from "./reducers/index";

const store = createStoreWithMiddleware(reducer);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="/friends" component={MakeFriends}/>
        <Route path="/happiness" component={HappinessShare}/>
        <Route path="/happinessPublish" component={HappinessPublish}/>
        <Route path='/moodDiary'>
          <IndexRoute component={MoodDiaries}/>
          <Route path="/moodDiaries/:userId" component={DiaryContent}/>
        </Route>
        <Route path="/writeDiaryPage" component={WriteDiaryPage}/>
        <Route path="/traveller">
          <IndexRoute component={Traveller}/>
          <Route path="/publication" component={TravellerArticlePublication}/>
        </Route>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));