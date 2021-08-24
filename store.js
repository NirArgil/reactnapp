import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootRedusers from './src/components/reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootRedusers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
