import React, {Component, PropTypes} from 'react';
import dateMath from '../../utils/date';
import cn from 'classnames';

import {TimeGroup} from './timeGroup';

export class Time extends Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
    showLabel: PropTypes.bool
  }

  static defaultProps = {
    className: '',
    showLabel: false
  }

  render() {
    const min = dateMath.diff(dateMath.startOf(new Date(), 'day'), dateMath.endOf(new Date(), 'day'), 'minutes');
    const slotNum = Math.ceil(min / 60);
    const slots = [];
    let date = dateMath.startOf(new Date(), 'day');
    let next = date;
    for (let i = 0; i < slotNum; i++) {
      next = dateMath.add(date, 60, 'minutes');
      slots.push(<TimeGroup key={i} showLabel={this.props.showLabel} value={date}/>);
      date = next;
    }
    return (
      <div className={cn(this.props.className, 'time-col')} style={this.props.style}>
        {slots}
        {this.props.children}
      </div>
    );
  }
}
