import React, {Component, PropTypes} from 'react';
import dates, {format} from 'app/utils/date';

import {Slot} from './slot';

export class TimeGroup extends Component {
  static propTypes = {
    showLabel: PropTypes.bool,
    value: PropTypes.instanceOf(Date)
  }

  static defaultProps = {
    showLabel: false
  }

  render() {
    const slots = [];
    let date = this.props.value;
    for (let i = 0; i < 2; i++) {
      slots.push(<Slot key={i} showLabel={this.props.showLabel && !i} label={format(date, 'LT')} value={date}/>);
      date = dates.add(date, 60, 'minutes');
    }

    return (
      <div className="time-group">
        {slots}
      </div>
    );
  }
}
