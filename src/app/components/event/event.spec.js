import React from 'react';
import {mount} from 'enzyme';
import chai, {expect} from 'chai';
import {Event} from './event';

chai.use(require('chai-enzyme')());

describe('Event', () => {
  let event;
  const propEvent = {name: 'Breakfast', start: new Date('November 4 2016 8:30 am'), end: new Date('November 4 2016 9:30 am')};

  beforeEach(() => {
    event = mount(<Event event={propEvent}/>);
  });

  it('should be a div', () => {
    expect(event).to.have.tagName('div');
  });

  it('has proper styling', () => {
    expect(event.find('.event-label')).to.have.length(1);
    expect(event.find('.event-content')).to.have.length(1);
  });

  it('takes an event object as a prop', () => {
    expect(event).to.have.prop('event', propEvent);
  });
});
