import React from 'react';
import {mount} from 'enzyme';
import chai, {expect} from 'chai';
import View from './view';
import {Slot} from './slot';
import {Time} from './time';
import {TimeGroup} from './timeGroup';
import wrapProvider from 'app/utils/wrapProvider';

chai.use(require('chai-enzyme')());

describe('View', () => {
  let mountedView;

  beforeEach(() => {
    mountedView = mount(wrapProvider(<View/>));
  });

  it('should be a div', () => {
    expect(mountedView).to.have.tagName('div');
  });

  it('has view id', () => {
    expect(mountedView).to.have.exactly(1).descendants('#view');
  });

  it('has the corresponding subComponents', () => {
    expect(mountedView).to.have.descendants(Time);
    const time = mountedView.find(Time);
    expect(time).to.have.descendants(TimeGroup);
    const timeGroups = time.find(TimeGroup);
    timeGroups.forEach(timeGroup => {
      expect(timeGroup).to.have.descendants(Slot);
    });
  });
});
