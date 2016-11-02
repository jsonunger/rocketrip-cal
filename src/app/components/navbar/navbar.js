import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {dateRange} from '../../utils/dateManipulation';
import {titleCase} from '../../utils/stringManipulation';
import {setDate, moveForward, moveBackward} from '../../actions/date';

const views = ['week'];

export class NavBar extends Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date),
    today: PropTypes.func,
    next: PropTypes.func,
    back: PropTypes.func
  }

  render() {
    return (
      <div className="navbar">
        <span className="nav-buttons">
          <button onClick={this.props.today}>Today</button>
          <button onClick={this.props.back}>Back</button>
          <button onClick={this.props.next}>Next</button>
        </span>
        <span className="nav-label">
          {dateRange(this.props.date)}
        </span>
        <span className="nav-buttons">
          {views.map(view => <button key={view}>{titleCase(view)}</button>)}
        </span>
      </div>
    );
  }
}

function mapStateToProps({date}) {
  return {
    date
  };
}

function mapDispatchToProps(dispatch) {
  return {
    next() {
      return dispatch(moveForward());
    },
    back() {
      return dispatch(moveBackward());
    },
    today() {
      return dispatch(setDate(new Date()));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
