import React from 'react';
import {mount} from 'enzyme';
import sinon from 'sinon';
import {expect} from 'chai';
import {Techs} from './techs';
import {Tech} from './tech';

describe('Techs', () => {
  it('calls componentDidMount', () => {
    sinon.spy(Techs.prototype, 'componentDidMount');
    mount(<Techs/>);
    expect(Techs.prototype.componentDidMount.calledOnce).to.be.true;
  });

  it('renders 8 Tech components', done => {
    const wrapper = mount(<Techs/>);
    setTimeout(() => {
      expect(wrapper.find(Tech)).to.have.length(8);
      done();
    }, 1000);
  });
});
