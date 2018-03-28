/* eslint import/no-named-default: off */

import { combineReducers } from 'redux';
// import { default as lesson8 } from './redux/Lesson8/reducer'; // don't do this.

const dummyReducer = (store = {}) => store;

export const reducers = combineReducers({
  dummy: dummyReducer,
  // lesson8,
});
