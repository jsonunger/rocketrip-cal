import {expect} from 'chai';
import reducer from '../view';
import {SET_VIEW} from '../../utils/constants';

export default function () {
  describe('view', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).to.equal('week');
    });

    it('should handle SET_VIEW', () => {
      expect(reducer(undefined, {
        type: SET_VIEW,
        view: 'month'
      })).to.equal('month');
    });
  });
}
