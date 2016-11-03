import React from 'react';
import {mount} from 'enzyme';
import chai, {expect} from 'chai';
import NavBar from './navbar';
import wrapProvider from 'app/utils/wrapProvider';

chai.use(require('chai-enzyme')());

describe('NavBar', () => {
  let navbar;

  beforeEach(() => {
    navbar = mount(wrapProvider(<NavBar/>));
  });

  it('should be a div', () => {
    expect(navbar).to.have.tagName('div');
  });

  it('has navbar class', () => {
    expect(navbar).to.have.exactly(1).descendants('.navbar');
  });

  it('changes the header on button clicks', () => {
    const range = navbar.find('.nav-label').text();
    navbar.findWhere(n => n.text() === 'Back').simulate('click');
    navbar.update();
    expect(navbar.find('.nav-label').text()).to.not.equal(range);
    navbar.findWhere(n => n.html() === '<button>Today</button>').simulate('click');
    navbar.update();
    expect(navbar.find('.nav-label').text()).to.equal(range);
  });
});
