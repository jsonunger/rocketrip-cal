import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';
import getWidth from 'dom-helpers/query/width';
import getScrollbarSize from 'dom-helpers/util/scrollbarSize';
import cn from 'classnames';
import {Header} from './header';
import {Time} from './time';
import {Day} from 'app/components/day/day';
import dateMath from 'app/utils/date';
import {setView} from 'app/actions/view';
import {setDate} from 'app/actions/date';

function makeHeaderCells(dates, dispatch) {
  const percentage = `${(1 / dates.length) * 100}%`;
  const style = {flexBasis: percentage, maxWidth: percentage};
  const onClick = date => {
    return Promise.resolve(dispatch(setDate(date)))
      .then(() => dispatch(setView('day')));
  };

  return dates.map((date, i) => (
    <div key={i} className={cn('header-cell', {today: dateMath.isToday(date)})} style={style}>
      <a onClick={onClick.bind(this, date)}>
        <Header label={dateMath.format(date, 'ddd, MMM Do')}/>
      </a>
    </div>
  ));
}

function makeDays(dates, events) {
  return dates.map((date, i) => {
    const dayEvents = events.filter(event => {
      return dateMath.inRange(date, {min: new Date(event.start), max: new Date(event.end)}, 'day');
    });
    const percentage = `${(1 / dates.length) * 100}%`;
    const style = {flexBasis: percentage, maxWidth: percentage};
    return <Day key={i} style={style} date={date} events={dayEvents}/>;
  });
}

export class Week extends Component {
  static propTypes = {
    events: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      start: PropTypes.string,
      end: PropTypes.string
    })).isRequired,
    date: PropTypes.instanceOf(Date),
    view: PropTypes.string,
    dispatch: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {overflowing: null, width: null};
  }

  componentWillMount() {
    this._gutters = [];
    this.checkScroll();
  }

  componentDidMount() {
    this.overflow();
    this.gutter();
    this.setScroll();
  }

  componentDidUpdate() {
    if (!this.state.width) {
      this.gutter();
    }
  }

  render() {
    const dates = dateMath.createDateRange(this.props.date, this.props.view);
    /* eslint-disable */
    const timeRef = ref => this._gutters[1] = ref && findDOMNode(ref);
    /* eslint-enable */
    const days = makeDays(dates, this.props.events);
    return (
      <div id="view">
        {this.header(dates, this.state.width)}
        <div ref={`cal`} className="grid">
          <Time showLabel style={{width: this.state.width}} ref={timeRef} className="time"/>
          {days}
        </div>
      </div>
    );
  }

  checkScroll() {
    const day = new Date();
    day.setHours(8);
    const scrollTo = dateMath.startOf(day, 'hour');
    const mill = Number(scrollTo) - Number(dateMath.startOf(scrollTo, 'day'));
    const total = Number(dateMath.endOf(new Date(), 'day')) - Number(dateMath.startOf(new Date(), 'day'));
    this._scroll = mill / total;
  }

  setScroll() {
    if (this._scroll) {
      this.refs.cal.scrollTop = this.refs.cal.scrollHeight * this._scroll;
      this._scroll = null;
    }
  }

  overflow() {
    if (this._updating) {
      return;
    }
    const overflowing = this.refs.cal.scrollHeight > this.refs.cal.clientHeight;
    if (this.state.overflowing !== overflowing) {
      this.setState({overflowing}, () => {
        this._updating = false;
      });
    }
  }

  gutter() {
    let width = this.state.width;
    if (!width) {
      width = Math.max(...this._gutters.map(cell => getWidth(cell)));
      if (width) {
        this.setState({width});
      }
    }
  }

  header(dates, width) {
    const style = {};
    if (this.state.overflowing) {
      style.marginRight = `${getScrollbarSize()}px`;
    }

    const setRef = ref => {
      this._gutters[0] = ref;
    };

    return (
      <div id="view-header" className={cn({overflow: this.state.overflowing})} style={style}>
        <div className="row">
          <div ref={setRef} className="label" style={{width}}/>
          {makeHeaderCells(dates, this.props.dispatch)}
        </div>
      </div>
    );
  }
}

function mapStateToProps({events, date, view}) {
  return {
    events,
    date,
    view
  };
}

export default connect(mapStateToProps)(Week);
