import React from 'react';
import {mount} from 'enzyme';
import sinon from 'sinon';
import chai, {expect} from 'chai';
import {Techs} from './techs';
import {Tech} from './tech';

chai.use(require('chai-enzyme')());

describe('Techs', () => {
  let techs;

  beforeEach(() => {
    techs = mount(<Techs/>);
  });

  it('calls componentDidMount', () => {
    sinon.spy(Techs.prototype, 'componentDidMount');
    mount(<Techs/>);
    expect(Techs.prototype.componentDidMount.calledOnce).to.be.true;
  });

  it('renders 8 Tech components', done => {
    setTimeout(() => {
      expect(techs).to.have.exactly(8).descendants(Tech);
      done();
    }, 1000);
  });

  it('properly manages its state', done => {
    expect(techs).to.have.state('techs').to.be.an.instanceOf(Array);
    setTimeout(() => {
      expect(techs).to.have.state('techs').have.length(8);
      done();
    }, 1000);
  });
});
