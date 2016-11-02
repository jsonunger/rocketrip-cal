import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import {Clock} from './clock';

chai.use(require('chai-enzyme')());

describe('Clock', () => {
  let clock;

  beforeEach(() => {
    clock = shallow(<Clock/>);
  });

  it('should be a clock', () => {
    expect(clock).to.have.tagName('p');
  });

  it('contains the date', () => {
    const dateFormatRegex = /\w+,\s\w+\s\d+\w+,\s\d+:\d{2}\s\w{2}/;
    expect(clock).to.have.text().match(dateFormatRegex);
  });
});
