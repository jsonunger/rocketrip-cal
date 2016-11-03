import moment from 'moment';

export function timeTravel(date, amount, key) {
  return moment(date).add(amount, key).toDate();
}

export function format(date, form = 'MMMM Do, YYYY') {
  return moment(date).format(form);
}

export function createDateHeader(date, view = 'week') {
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

export function createDateRange(date, view = 'week') {
  let start = moment(date).startOf(view);
  const end = moment(date).endOf(view);
  const dates = [start.clone().toDate()];
  while (!start.isSame(end, 'day')) {
    start = start.clone().add(1, 'day');
    dates.push(start.clone().toDate());
  }
  return dates;
}

export function isToday(date) {
  return moment().isSame(date, 'day');
}

export function overlap(dateA, dateB) {
  return moment(dateA).isBefore(dateB);
}

export function diff(dateA, dateB, unit) {
  return Math.abs(moment(dateA).diff(dateB, unit));
}

export function startOf(date, unit) {
  return moment(date).startOf(unit).toDate();
}

export function endOf(date, unit) {
  return moment(date).endOf(unit).toDate();
}

export function add(date, amount, unit) {
  return moment(date).add(amount, unit).toDate();
}

export function inRange(date, min, max, unit) {
  const dateMoment = moment(date);
  return dateMoment.isSameOrAfter(min, unit) && dateMoment.isSameOrBefore(max, unit);
}

export default {
  timeTravel,
  format,
  createDateHeader,
  createDateRange,
  isToday,
  overlap,
  diff,
  startOf,
  endOf,
  add,
  inRange
};
