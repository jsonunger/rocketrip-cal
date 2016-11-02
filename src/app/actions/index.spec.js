import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as tests from './tests';

const mockStore = configureMockStore([thunk]);

describe('REDUX actions', () => {
  mockStore({events: []});

  tests.events(mockStore);
  tests.date(mockStore);
});
