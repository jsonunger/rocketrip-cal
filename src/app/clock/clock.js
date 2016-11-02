import React, {Component} from 'react';
import moment from 'moment';

const styles = {
  date: {
    flex: 1,
    textAlign: 'right',
    margin: '1rem',
    color: 'white'
  }
};

export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this._runningClock = setInterval(() => {
      const time = moment(new Date());
      if (!(time.isSame(this.state.time, 'hour') && time.isSame(this.state.time, 'minute'))) {
        this.setState({time: time.toDate()});
      }
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this._runningClock);
  }

  render() {
    const currentTime = moment(this.state.time).format('ddd, MMM Do, h:mm A');
    return (
      <p style={styles.date}>
        {currentTime}
      </p>
    );
  }
}
