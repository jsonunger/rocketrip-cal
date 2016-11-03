import {RECEIVE_EVENTS} from 'app/utils/constants';

export default function (state = [], action) {
  switch (action.type) {
    case RECEIVE_EVENTS:
      return action.events;
    default:
      return state;
  }
}
