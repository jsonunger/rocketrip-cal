import chai, {expect} from 'chai';
import {setDate, moveForward, moveBackward} from 'app/actions/date';
import {SET_DATE, DATE_FORWARD, DATE_BACKWARD} from 'app/utils/constants';

chai.use(require('chai-things'));
chai.use(require('chai-datetime'));

export default function (mockStore) {
  describe('date', () => {
    let store;

    beforeEach(() => {
      store = mockStore({date: new Date('November 2 2016'), view: 'week'});
    });

    it('dispatches SET_DATE', () => {
      expect(store.getState()).to.have.property('date').equalDate(new Date('November 2 2016'));
      store.dispatch(setDate(new Date('September 25 2016')));
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).to.include(SET_DATE);
    });

    it('dispatches DATE_FORWARD', () => {
      store.dispatch(moveForward());
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).to.include(DATE_FORWARD);
    });

    it('dispatches DATE_BACKWARD', () => {
      store.dispatch(moveBackward());
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).to.include(DATE_BACKWARD);
    });
  });
}
