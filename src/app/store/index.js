import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'app/reducers';

const middleware = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleware.push(require('redux-logger')());
}

const enhancers = compose(applyMiddleware(...middleware), window.devToolsExtension ? window.devToolsExtension() : f => f);

export default createStore(rootReducer, {events: []}, enhancers);
