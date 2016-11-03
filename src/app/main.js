import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Header} from './components/header/header';
import {Calendar} from './components/calendar/calendar';
import {Footer} from './components/footer/footer';
import {fetchEvents} from './actions/events';

export class Main extends Component {
  componentDidMount() {
    if (this.props.dispatch) {
      this.props.dispatch(fetchEvents());
    }
  }

  render() {
    return (
      <div id="container">
        <Header/>
        <main>
          <Calendar/>
        </main>
        <Footer/>
      </div>
    );
  }
}

Main.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(Main);
