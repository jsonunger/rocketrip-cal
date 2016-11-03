import React from 'react';
import {mount} from 'enzyme';
import chai, {expect} from 'chai';
import Week, {Week as StaticWeek} from './week';
import {Slot} from './slot';
import {Time} from './time';
import {TimeGroup} from './timeGroup';
import wrapProvider from '../../utils/wrapProvider';

chai.use(require('chai-enzyme')());

describe('Week', () => {
  let mountedWeek;
  let staticWeek;

  beforeEach(() => {
    mountedWeek = mount(wrapProvider(<Week/>));
    staticWeek = mount(<StaticWeek events={[]} date={new Date()}/>);
  });

  it('should be a div', () => {
    expect(mountedWeek).to.have.tagName('div');
  });

  it('has week id', () => {
    expect(mountedWeek).to.have.exactly(1).descendants('#week');
  });

  it('has the corresponding subComponents', () => {
    expect(staticWeek).to.have.descendants(Time);
    const time = staticWeek.find(Time);
    expect(time).to.have.descendants(TimeGroup);
    const timeGroups = time.find(TimeGroup);
    timeGroups.forEach(timeGroup => {
      expect(timeGroup).to.have.descendants(Slot);
    });
  });
});
