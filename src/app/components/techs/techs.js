import React, {Component} from 'react';
import axios from 'axios';

import {Tech} from './tech';

const styles = {
  container: {
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '1.5rem'
  },
  techs: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
};

export class Techs extends Component {
  constructor() {
    super();
    this.state = {techs: []};
  }

  componentDidMount() {
    axios
      .get('https://jsonblob.com/api/5819079fe4b0a828bd1dd9e3')
      .then(res => res.data)
      .then(techs => {
        this.setState({techs});
      });
  }

  render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.h2}>
          Cooked with all these awesome technologies:
        </h2>
        <div style={styles.techs}>
          {this.state.techs.map(tech => (
            <Tech key={tech.key} tech={tech}/>
          ))}
        </div>
      </div>
    );
  }
}
