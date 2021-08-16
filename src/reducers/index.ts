// import { combineReducers, createStore } from 'redux';

import userReducer, { toggleNavState } from './userReducer';

const Reducer = {
  userReducer,
  toggleNavState
};

export default Reducer;

/* export default createStore(
  combineReducers({
    testReducer: userReducer
  })
); */
