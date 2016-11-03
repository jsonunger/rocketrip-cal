import React, {Component, PropTypes} from 'react';
import {Time} from 'app/components/week/time';
import {Event} from 'app/components/event/event';
import dateMath from 'app/utils/date';
import {slot} from 'app/utils/style';
import cn from 'classnames';

function checkOverlap(eventStart, events, currentOffset) {
  let offset = currentOffset;
  if (!events.length) {
    return currentOffset - 1;
  }

  events.reverse().some(event => {
    if (dateMath.overlap(eventStart, new Date(event.end))) {
      return true;
    }
    offset -= 1;
    return false;
  });

  return offset;
}

export class Day extends Component {
  static propTypes = {
    events: PropTypes.arrayOf(PropTypes.object).isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    className: PropTypes.string,
    style: PropTypes.object
  }

  render() {
    return (
      <Time className={cn('day', {today: dateMath.isToday(this.props.date)})} style={this.props.style}>
        {this.events()}
      </Time>
    );
  }

  events() {
    const {events} = this.props;

    events.sort((a, b) => {
      const aStart = new Date(a.start);
      const bStart = new Date(b.start);
      return Number(aStart) - Number(bStart);
    });
    let offset = 0;

    return events.map((event, i) => {
      const start = new Date(event.start);
      const end = new Date(event.end);
      const startS = dateMath.diff(dateMath.startOf(start, 'day'), start, 'minutes');
      const endS = dateMath.diff(dateMath.startOf(end, 'day'), end, 'minutes');

      offset = Math.max(0, checkOverlap(start, events.slice(0, i), offset + 1));

      const style = slot(startS, endS, offset);
      event = {
        ...event,
        start,
        end
      };
      return <Event key={i} style={style} className={cn('event', {overlap: offset !== 0})} event={event}/>;
    });
  }
}
