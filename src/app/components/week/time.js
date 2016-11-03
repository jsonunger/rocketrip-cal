import React, {Component, PropTypes} from 'react';
import dates, {startOf, endOf, diff} from 'date-arithmetic';
import cn from 'classnames';

import {TimeGroup} from './timeGroup';

export class Time extends Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.element
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const min = diff(startOf(new Date(), 'day'), endOf(new Date(), 'day'), 'minutes');
    const slotNum = Math.ceil(min / 60);
    const slots = [];
    let date = startOf(new Date(), 'day');
    let next = date;
    for (let i = 0; i < slotNum; i++) {
      next = dates.add(date, 60, 'minutes');
      slots.push(<TimeGroup key={i} showLabel value={date}/>);
      date = next;
    }
    return (
      <div className={cn(this.props.className, 'time')} style={this.props.style}>
        {slots}
        {this.props.children}
      </div>
    );
  }
}
