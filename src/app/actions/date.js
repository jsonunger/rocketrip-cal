import {SET_DATE, DATE_FORWARD, DATE_BACKWARD} from '../utils/constants';

export const setDate = date => ({
  type: SET_DATE,
  date
});

export const moveForward = () => ({
  type: DATE_FORWARD
});

export const moveBackward = () => ({
  type: DATE_BACKWARD
});
