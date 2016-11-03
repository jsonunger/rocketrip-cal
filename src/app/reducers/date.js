import {SET_DATE, DATE_FORWARD, DATE_BACKWARD} from 'app/utils/constants';
import {timeTravel} from 'app/utils/date';

export default function (state = new Date('November 2 2016'), action) {
  switch (action.type) {
    case SET_DATE:
      return action.date;
    case DATE_FORWARD:
      return timeTravel(state, 1, `${action.view}s`);
    case DATE_BACKWARD:
      return timeTravel(state, -1, `${action.view}s`);
    default:
      return state;
  }
}
