import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Main from './app/main';
import store from './app/store';

import './index.scss';

const App = () => (
  <Provider store={store}>
    <Main/>
  </Provider>
);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
