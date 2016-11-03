import dateMath from './date';

export function slot(start, end, offset) {
  end = Math.max(end, start + 30);
  const minInDay = dateMath.diff(dateMath.startOf(new Date(), 'day'), dateMath.endOf(new Date(), 'day'), 'minutes');

  const top = (start / minInDay) * 100;
  const bottom = (end / minInDay) * 100;
  const percent = offset === 0 ? 0 : (offset * 10);
  const right = 10 / (offset + 1);
  const width = (offset === 0 ? (90) : (100 - percent) - right);

  return {
    top: `${top}%`,
    height: `${bottom - top}%`,
    left: `${percent}%`,
    width: `${width}%`
  };
}
