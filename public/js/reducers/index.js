import {combineReducers} from 'redux';
import moodDiaries from './moodDiary';
import showHappiness from './show-happiness';

export default combineReducers({moodDiaries, showHappiness});