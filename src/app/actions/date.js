import {SET_DATE, DATE_FORWARD, DATE_BACKWARD} from '../utils/constants';

export const setDate = date => ({
  type: SET_DATE,
  date
});

export const moveForward = () => (dispatch, getState) => {
  const {view} = getState();
  dispatch({
    type: DATE_FORWARD,
    view
  });
};

export const moveBackward = () => (dispatch, getState) => {
  const {view} = getState();
  dispatch({
    type: DATE_BACKWARD,
    view
  });
};
