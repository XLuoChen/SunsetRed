import {combineReducers} from 'redux';
import moodDiaries from './moodDiary';
import showHappiness from './show-happiness';
import traveller from './traveller';
import Friends from './show-friend'

export default combineReducers({moodDiaries, showHappiness, Friends, traveller});
