import {combineReducers} from 'redux';
import moodDiaries from './moodDiary';
import showHappiness from './show-happiness';
import traveller from './traveller';
import showFriends from './show-friend';
import diaryContent from './diaryContent';

export default combineReducers({moodDiaries, showHappiness, showFriends, traveller,diaryContent});
