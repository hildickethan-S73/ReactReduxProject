import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import middleware from './middleware';

// REDUX browser extension for development
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// wrap application with our middleware and the browser extension middleware
const store = createStore(reducers, composeEnhancers(applyMiddleware(middleware)));

export default store;