import { combineReducers, createStore } from 'redux';

import { testReducer } from './testReducer';


export default createStore(combineReducers({
    testReducer
}));
