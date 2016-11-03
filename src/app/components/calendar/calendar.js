import React from 'react';

import NavBar from '../navbar/navbar';
import Week from '../week/week';

export const Calendar = () => (
  <div style={{margin: 'auto'}}>
    <div className="cal">
      <NavBar/>
      <Week/>
    </div>
  </div>
);
