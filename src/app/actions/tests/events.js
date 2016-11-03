import chai, {expect} from 'chai';
import mockFetch from 'fetch-mock';
import {fetchEvents} from 'app/actions/events';
import {RECEIVE_EVENTS} from 'app/utils/constants';

chai.use(require('chai-things'));

export default function (mockStore) {
  describe('events', () => {
    let store;

    beforeEach(() => {
      store = mockStore({events: []});
    });

    mockFetch.get('*', [{
      name: 'Breakfast',
      start: '2016-11-05T12:30:00.000Z',
      end: '2016-11-05T13:00:00.000Z'
    }, {
      name: 'Voting',
      start: '2016-11-08T15:00:00.000Z',
      end: '2016-11-08T16:00:00.000Z'
    }]);

    it('dispatches RECEIVE_EVENTS', () => {
      return store.dispatch(fetchEvents())
        .then(() => {
          const actionTypes = store.getActions().map(action => action.type);
          expect(actionTypes).to.include(RECEIVE_EVENTS);
        });
    });

    it('sends events to reducer', () => {
      return store.dispatch(fetchEvents())
        .then(() => {
          const eventAction = store.getActions()[0];
          expect(eventAction).to.have.property('events');
          expect(eventAction.events).to.have.length(2);
          expect(eventAction.events).to.include.something.with.property('name', 'Voting');
        });
    });
  });
}
