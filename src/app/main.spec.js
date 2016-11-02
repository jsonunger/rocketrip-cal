import React from 'react';
import {mount} from 'enzyme';
import sinon from 'sinon';
import chai, {expect} from 'chai';

import {Main} from './main';
import wrapProvider from './utils/wrapProvider';
chai.use(require('chai-enzyme')());

describe('Main', () => {
  it('calls componentDidMount', () => {
    sinon.spy(Main.prototype, 'componentDidMount');
    mount(wrapProvider(<Main/>));
    expect(Main.prototype.componentDidMount.calledOnce).to.be.true;
  });
});
