import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';
import dateMath from 'date-arithmetic';
import getWidth from 'dom-helpers/query/width';
import getScrollbarSize from 'dom-helpers/util/scrollbarSize';
import cn from 'classnames';
import {Header} from './header';
import {Time} from './time';
import {Day} from './day';
import {format, dateRange, isToday} from '../../utils/dateManipulation';

function makeDays(dates, events) {
  return dates.map((date, i) => {
    const dayEvents = events.filter(event => {
      const dateStart = dateMath.startOf(date, 'day');
      const dateEnd = dateMath.endOf(date, 'day');
      return dateMath.lte(dateStart, new Date(event.end), 'day') && dateMath.gt(dateEnd, new Date(event.start), 'day');
    });
    const percentage = `${(1 / 7) * 100}%`;
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
    scrollTo: PropTypes.instanceOf(Date)
  }

  static defaultProps = {
    scrollTo: dateMath.startOf(new Date(), 'day')
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
    const dates = dateRange(this.props.date);
    /* eslint-disable */
    const timeRef = ref => this._gutters[1] = ref && findDOMNode(ref);
    /* eslint-enable */
    const days = makeDays(dates, this.props.events);
    return (
      <div id="week">
        {this.header(dates, this.state.width)}
        <div ref={`cal`} className="view">
          <Time showLabel style={{width: this.state.width}} ref={timeRef} className="time"/>
          {days}
        </div>
      </div>
    );
  }

  checkScroll() {
    const {scrollTo} = this.props;
    const mill = scrollTo - dateMath.startOf(scrollTo, 'day');
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
      <div id="week-header" className={cn({overflow: this.state.overflowing})} style={style}>
        <div className="row">
          <div ref={setRef} className="label" style={{width}}/>
          {this.headerCells(dates)}
        </div>
      </div>
    );
  }

  headerCells(dates) {
    const percentage = `${(1 / 7) * 100}%`;
    const style = {flexBasis: percentage, maxWidth: percentage};
    return dates.map((date, i) => (
      <div key={i} className={cn('header-cell', {today: isToday(date)})} style={style}>
        <a href="#">
          <Header label={format(date, 'ddd, MMM Do')}/>
        </a>
      </div>
    ));
  }
}

function mapStateToProps({events, date}) {
  return {
    events,
    date
  };
}

export default connect(mapStateToProps)(Week);
