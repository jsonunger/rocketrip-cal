import React, {Component} from 'react';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1f1f1f'
  },
  title: {
    flex: 1,
    fontSize: '1.5rem',
    margin: '1rem'
  },
  date: {
    flex: 1,
    textAlign: 'right',
    margin: '1rem',
    color: 'white'
  }
};

export class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <p style={styles.title}>
          <a href="https://github.com/FountainJS/generator-fountain-webapp" target="_blank">
            Fountain Generator
          </a>
        </p>
        <p style={styles.date}>
          Generated with FountainJS v1.0.0-rc1 on Tue Nov 01 2016 13:35:47 GMT-0400 (EDT)
        </p>
      </header>
    );
  }
}
