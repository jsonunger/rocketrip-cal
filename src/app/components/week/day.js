import React, {Component, PropTypes} from 'react';
import {Time} from './time';
import {isToday} from '../../utils/dateManipulation';
import cn from 'classnames';

export class Day extends Component {
  static propTypes = {
    events: PropTypes.arrayOf(PropTypes.object).isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    className: PropTypes.string,
    style: PropTypes.object
  }

  render() {
    return (
      <Time className={cn('day', {today: isToday(this.props.date)})} style={this.props.style}>
        {/* EVENTS */}
      </Time>
    );
  }
}
