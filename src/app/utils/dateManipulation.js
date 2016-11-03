import moment from 'moment';

export function timeTravel(date, amount, key) {
  return moment(date).add(amount, key).toDate();
}

export function format(date, form = 'MMMM Do, YYYY') {
  return moment(date).format(form);
}

export function dateHeader(date, view = 'week') {
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

export function dateRange(date, view = 'week') {
  let start = moment(date).startOf(view);
  const end = moment(date).endOf(view);
  const dates = [start];
  while (!start.isSame(end, 'day')) {
    start = start.clone().add(1, 'day');
    dates.push(start);
  }
  return dates;
}

export function isToday(date) {
  return moment().isSame(date, 'day');
}
