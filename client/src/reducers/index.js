// REDUCERS
import { combineReducers } from 'redux';
import { tenReducer } from './tenReducer';
import { singleReducer } from './singleReducer'

export const reducer = combineReducers({tenReducer, singleReducer});