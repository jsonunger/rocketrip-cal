import React from 'react';
import {Clock} from 'app/components/clock/clock';

export const Header = () => (
  <header>
    <p className="title">
      Rocketrip Calendar
    </p>
    <Clock/>
  </header>
);
