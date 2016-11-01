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
      this.setState({time: new Date()});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._runningClock);
  }

  render() {
    return <p style={styles.date}>{moment(this.state.time).format('ddd, MMM Do, h:mm:ss a')}</p>;
  }
}
