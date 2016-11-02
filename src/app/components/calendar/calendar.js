import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import NavBar from '../navbar/navbar';

export class Calendar extends Component {
  static propTypes = {
    events: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      start: PropTypes.string,
      end: PropTypes.string
    })).isRequired,
    date: PropTypes.instanceOf(Date)
  }

  render() {
    return (
      <div style={{margin: 'auto'}}>
        <div className="cal">
          <NavBar/>
          {this.props.events.map((event, i) => <p key={i}>{event.name}</p>)}
        </div>
      </div>
    );
  }
}

function mapStateToProps({events, date}) {
  return {
    events,
    date
  };
}

export default connect(mapStateToProps)(Calendar);
