import {combineReducers} from 'redux';
import moodDiaries from './moodDiary';
import showHappiness from './show-happiness';
import traveller from './traveller';

export default combineReducers({moodDiaries, showHappiness, traveller});