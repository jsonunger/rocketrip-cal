import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Header} from './components/header/header';
import Calendar from './components/calendar/calendar';
import {Footer} from './components/footer/footer';
import {fetchEvents} from './actions/events';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    margin: 'auto'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export class Main extends Component {
  componentDidMount() {
    if (this.props.dispatch) {
      this.props.dispatch(fetchEvents());
    }
  }

  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <main style={styles.main}>
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
