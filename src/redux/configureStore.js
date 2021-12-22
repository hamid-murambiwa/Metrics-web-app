import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import artReducer from './art/art';

const reducer = combineReducers({
  artReducer,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunkMiddleware),
);

export default store;
