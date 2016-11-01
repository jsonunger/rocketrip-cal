import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {Footer} from './footer';

describe('Footer', () => {
  it('should be a footer', () => {
    const footer = shallow(<Footer/>);
    expect(footer.type()).to.equal('footer');
  });
});
