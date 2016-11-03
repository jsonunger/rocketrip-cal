import {expect} from 'chai';
import reducer from 'app/reducers/view';
import {SET_VIEW} from 'app/utils/constants';

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
