import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import {Footer} from './footer';

chai.use(require('chai-enzyme')());

describe('Footer', () => {
  let footer;

  beforeEach(() => {
    footer = shallow(<Footer/>);
  });

  it('should be a footer', () => {
    expect(footer).to.have.tagName('footer');
  });

  it('should contain a link for my website', () => {
    expect(footer).to.have.exactly(1).descendants('a');
    const link = footer.find('a');
    expect(link).to.have.text('Jason Unger');
    expect(link).to.have.prop('href').equal('http://jsonunger.com');
  });
});
