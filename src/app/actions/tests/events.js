import chai, {expect} from 'chai';
import nock from 'nock';
import {fetchEvents} from '../events';
import {RECEIVE_EVENTS} from '../../utils/constants';

chai.use(require('chai-things'));

export default function (mockStore) {
  describe('events', () => {
    let store;

    beforeEach(() => {
      store = mockStore({events: []});
    });

    afterEach(() => {
      nock.cleanAll();
    });

    const eventsAPICall = nock('https://jsonblob.com').get('/api/581a0c9fe4b0a828bd1e5f68');

    it('dispatches RECEIVE_EVENTS', () => {
      eventsAPICall.reply(200);

      return store.dispatch(fetchEvents())
        .then(() => {
          const actionTypes = store.getActions().map(action => action.type);
          expect(actionTypes).to.include(RECEIVE_EVENTS);
        });
    });

    it('sends events to reducer', () => {
      eventsAPICall.reply(200);

      return store.dispatch(fetchEvents())
        .then(() => {
          const eventAction = store.getActions()[0];
          expect(eventAction).to.have.property('events');
          expect(eventAction.events).to.have.length(4);
          expect(eventAction.events).to.include.something.with.property('name', 'Voting');
        });
    });
  });
}
