import React, {PropTypes} from 'react';
import {format} from 'app/utils/date';

export const Event = ({event, style, className}) => {
  return (
    <div style={style} className={className}>
      <div className="event-label">
        <span>
          {`${format(event.start, 'h:mm a')} - ${format(event.end, 'h:mm a')}`}
        </span>
        <div className="event-content">
          {event.name}
        </div>
      </div>
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string
};
