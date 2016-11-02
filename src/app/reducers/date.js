import {SET_DATE, DATE_FORWARD, DATE_BACK} from '../utils/constants';
import {timeTravel} from '../utils/dateManipulation';

export default function (state = new Date('November 2 2016'), action) {
  switch (action.type) {
    case SET_DATE:
      return action.date;
    case DATE_FORWARD:
      return timeTravel(state, 1, 'w');
    case DATE_BACK:
      return timeTravel(state, -1, 'w');
    default:
      return state;
  }
}
