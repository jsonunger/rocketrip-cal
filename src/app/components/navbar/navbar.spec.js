import React from 'react';
import {mount} from 'enzyme';
import chai, {expect} from 'chai';
import NavBar from './navbar';
import wrapProvider from 'app/utils/wrapProvider';

chai.use(require('chai-enzyme')());

describe('NavBar', function () {
  this.timeout(2500);
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

  it('changes the header on button clicks', done => {
    const range = navbar.find('.nav-label').text();
    navbar.findWhere(n => n.text() === 'Back').simulate('click');
    setTimeout(() => navbar.update(), 500);
    expect(navbar.find('.nav-label').text()).to.not.equal(range);
    navbar.findWhere(n => n.html() === '<button>Today</button>').simulate('click');
    setTimeout(() => navbar.update(), 500);
    expect(navbar.find('.nav-label').text()).to.equal(range);
    done();
  });

  it('changes the view on button click', done => {
    let viewButton = navbar.find('.active');
    expect(viewButton.text()).to.equal('Week');
    viewButton.simulate('click');
    setTimeout(() => navbar.update(), 500);
    viewButton = navbar.find('.active');
    expect(viewButton.text()).to.equal('Day');
    viewButton.simulate('click');
    setTimeout(() => navbar.update(), 500);
    viewButton = navbar.find('.active');
    expect(viewButton.text()).to.equal('Week');
    done();
  });
});
