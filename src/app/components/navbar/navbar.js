import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {createDateHeader} from '../../utils/date';
import {titleCase} from '../../utils/stringManipulation';
import {setDate, moveForward, moveBackward} from '../../actions/date';
import {setView} from '../../actions/view';

export class NavBar extends Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date),
    today: PropTypes.func,
    next: PropTypes.func,
    back: PropTypes.func,
    changeView: PropTypes.func,
    view: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.handleViewChange = this.handleViewChange.bind(this);
  }

  handleViewChange(e) {
    e.preventDefault();
    const {changeView, view} = this.props;
    const newView = e.target.innerText.toLowerCase();
    if (newView !== view) {
      changeView(e.target.innerText.toLowerCase());
    }
  }

  render() {
    return (
      <div className="navbar">
        <span className="nav-buttons">
          <button onClick={this.props.today}>Today</button>
        </span>
        <span className="nav-label">
          {createDateHeader(this.props.date, this.props.view)}
        </span>
        <span className="nav-buttons">
          <button onClick={this.props.back}>Back</button>
          <button className="active">{titleCase(this.props.view)}</button>
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
    today() {
      return dispatch(setDate(new Date()));
    },
    changeView(view) {
      return dispatch(setView(view));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
