import React, {Component} from 'react';
import {Clock} from '../clock/clock';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1f1f1f'
  },
  title: {
    flex: 1,
    fontSize: '1.2rem',
    margin: '1rem',
    color: 'white'
  }
};

export class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <p style={styles.title}>
          Rocketrip Calendar
        </p>
        <Clock/>
      </header>
    );
  }
}
