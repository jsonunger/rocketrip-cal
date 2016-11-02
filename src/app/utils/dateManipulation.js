import moment from 'moment';

export function timeTravel(date, amount, key) {
  return moment(date).add(amount, key).toDate();
}
