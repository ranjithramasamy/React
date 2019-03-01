import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './global.reducer';

const middleware = [ thunk ];

const globalStore = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

export default globalStore;