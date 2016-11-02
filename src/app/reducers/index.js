import {combineReducers} from 'redux';
import events from './events';
import date from './date';
import view from './view';

export default combineReducers({
  events,
  date,
  view
});
