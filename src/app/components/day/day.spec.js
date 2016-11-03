import React from 'react';
import {mount} from 'enzyme';
import chai, {expect} from 'chai';
import {Day} from './day';
import {Time} from 'app/components/week/time';
import {Event} from 'app/components/event/event';

chai.use(require('chai-enzyme')());
chai.use(require('chai-datetime'));

describe('Day', () => {
  let day;
  const propEvents = [{name: 'Breakfast', start: new Date('November 4 2016 8:30 am'), end: new Date('November 4 2016 9:30 am')}];

  beforeEach(() => {
    day = mount(<Day events={propEvents} date={new Date('November 4 2016')}/>);
  });

  it('should be a Time component', () => {
    expect(day).to.have.exactly(1).descendants(Time);
  });

  it('has proper styling', () => {
    expect(day.find('.day')).to.have.length(1);
  });

  it('takes an events array and date as a prop', () => {
    expect(day).to.have.prop('events', propEvents);
    expect(day).to.have.prop('date').equalDate(new Date('November 4 2016'));
  });

  it('renders Event components for each event', () => {
    expect(day.find(Event)).to.have.length(propEvents.length);
  });
});
