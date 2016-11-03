import React from 'react';
import {mount} from 'enzyme';
import chai, {expect} from 'chai';
import Calendar from './calendar';
import NavBar from '../navbar/navbar';
import wrapProvider from '../../utils/wrapProvider';

chai.use(require('chai-enzyme')());

describe('Calendar', () => {
  let calendar;

  beforeEach(() => {
    calendar = mount(wrapProvider(<Calendar/>));
  });

  it('should be a div', () => {
    expect(calendar).to.have.tagName('div');
  });

  it('has proper styling', () => {
    expect(calendar).to.have.style('margin', 'auto');
  });

  it('has calendar class', () => {
    expect(calendar).to.have.exactly(1).descendants('.cal');
  });

  it('includes a NavBar', () => {
    expect(calendar.find('.cal')).to.contain(<NavBar/>);
  });
});
