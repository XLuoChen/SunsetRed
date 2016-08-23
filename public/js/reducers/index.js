import {combineReducers} from 'redux';
import moodDiary from './moodDiary';
import showHappiness from './show-happiness';

export default combineReducers({moodDiary, showHappiness});