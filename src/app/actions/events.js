import {RECEIVE_EVENTS} from 'app/utils/constants';
import {get} from 'app/utils/ajax';

export const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

export const fetchEvents = () => dispatch => {
  return get('https://jsonblob.com/api/581a0c9fe4b0a828bd1e5f68')
    .then(events => dispatch(receiveEvents(events)));
};
