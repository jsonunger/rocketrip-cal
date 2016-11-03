import chai, {expect} from 'chai';
import reducer from '../date';
import {SET_DATE, DATE_FORWARD, DATE_BACKWARD} from '../../utils/constants';

chai.use(require('chai-datetime'));

export default function () {
  describe('date', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).to.equalDate(new Date('November 2 2016'));
    });

    it('should handle SET_DATE', () => {
      expect(reducer(undefined, {
        type: SET_DATE,
        date: new Date('September 25 2016')
      })).to.equalDate(new Date('September 25 2016'));
    });

    it('should handle DATE_FORWARD', () => {
      expect(reducer(undefined, {
        type: DATE_FORWARD,
        view: 'week'
      })).to.equalDate(new Date('November 9 2016'));
    });

    it('should handle DATE_BACKWARD', () => {
      expect(reducer(undefined, {
        type: DATE_BACKWARD,
        view: 'month'
      })).to.equalDate(new Date('October 2 2016'));
    });
  });
}
