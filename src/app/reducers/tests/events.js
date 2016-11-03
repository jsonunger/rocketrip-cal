import {expect} from 'chai';
import reducer from '../events';
import {RECEIVE_EVENTS} from '../../utils/constants';

export default function () {
  describe('events', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).to.deep.equal([]);
    });

    it('should handle RECEIVE_EVENTS', () => {
      const events = [{
        name: 'Breakfast',
        start: '2016-11-05T12:30:00.000Z',
        end: '2016-11-05T13:00:00.000Z'
      }, {
        name: 'Voting',
        start: '2016-11-08T15:00:00.000Z',
        end: '2016-11-08T16:00:00.000Z'
      }, {
        name: 'Happy Hour',
        start: '2016-11-04T21:00:00.000Z',
        end: '2016-11-04T23:00:00.000Z'
      }, {
        name: 'Dinner with Dad',
        start: '2016-11-04T22:30:00.000Z',
        end: '2016-11-05T01:00:00.000Z'
      }];
      expect(reducer([], {
        type: RECEIVE_EVENTS,
        events
      })).to.deep.equal(events);
    });
  });
}
