import React from 'react';

import NavBar from 'app/components/navbar/navbar';
import Week from 'app/components/week/week';

export const Calendar = () => (
  <div style={{margin: 'auto'}}>
    <div className="cal">
      <NavBar/>
      <Week/>
    </div>
  </div>
);
