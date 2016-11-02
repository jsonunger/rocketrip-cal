import moment from 'moment';

export function timeTravel(date, amount, key) {
  return moment(date).add(amount, key).toDate();
}

export function fullFormat(date) {
  return moment(date).format('MMMM Do, YYYY');
}

export function dateRange(date, view = 'week') {
  const start = moment(date).startOf(view);
  const end = moment(date).endOf(view);
  if (start.isSame(end, 'day')) {
    return start.format('MMM Do, YYYY');
  } else if (start.isSame(end, 'month') && view === 'week') {
    return `${start.format('MMM Do')} - ${end.format('Do, YYYY')}`;
  } else if (start.isSame(end, 'month')) {
    return `${start.format('MMMM YYYY')}`;
  } else if (start.isSame(end, 'year')) {
    return `${start.format('MMM Do')} - ${end.format('MMM Do, YYYY')}`;
  }
  return `${start.format('MMM Do, YYYY')} - ${end.format('MMM Do, YYYY')}`;
}
