import React, {Component} from 'react';
import {Clock} from '../clock/clock';

export class Header extends Component {
  render() {
    return (
      <header>
        <p className="title">
          Rocketrip Calendar
        </p>
        <Clock/>
      </header>
    );
  }
}
