import React, {Component, PropTypes} from 'react';
import cn from 'classnames';

export class Slot extends Component {
  static propTypes = {
    showLabel: PropTypes.bool,
    label: PropTypes.string,
    value: PropTypes.instanceOf(Date)
  }

  static defaultProps = {
    showLabel: false,
    label: ''
  }

  render() {
    return (
      <div className={cn('slot', {label: this.props.showLabel})}>
        {this.props.showLabel && <span>{this.props.label}</span>}
      </div>
    );
  }
}
