import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import dateMath from 'app/utils/date';
import {titleCase} from 'app/utils/stringManipulation';
import {setDate, moveForward, moveBackward} from 'app/actions/date';
import {setView} from 'app/actions/view';

export class NavBar extends Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date),
    jumpToToday: PropTypes.func,
    next: PropTypes.func,
    back: PropTypes.func,
    changeView: PropTypes.func,
    view: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleToday = this.handleToday.bind(this);
  }

  handleViewChange(e) {
    e.preventDefault();
    const {changeView, view} = this.props;
    changeView(view === 'week' ? 'day' : 'week');
  }

  handleToday(e) {
    e.preventDefault();
    const {jumpToToday, date, view} = this.props;
    const range = dateMath.createDateRange(date, view);
    const start = range[0];
    const end = range[range.length - 1];
    if (!dateMath.inRange(new Date(), {min: start, max: end}, 'day')) {
      jumpToToday();
    }
  }

  render() {
    return (
      <div className="navbar">
        <span className="nav-buttons">
          <button onClick={this.handleToday}>Today</button>
        </span>
        <span className="nav-label">
          {dateMath.createDateHeader(this.props.date, this.props.view)}
        </span>
        <span className="nav-buttons">
          <button onClick={this.props.back}>Back</button>
          <button onClick={this.handleViewChange} className="active">{titleCase(this.props.view)}</button>
          <button onClick={this.props.next}>Next</button>
        </span>
      </div>
    );
  }
}

function mapStateToProps({date, view}) {
  return {
    date,
    view
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
    jumpToToday() {
      return dispatch(setDate(new Date()));
    },
    changeView(view) {
      return dispatch(setView(view));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
