import {SET_VIEW} from '../utils/constants';

export default function (state = 'week', action) {
  switch (action.type) {
    case SET_VIEW:
      return action.view;
    default:
      return state;
  }
}
