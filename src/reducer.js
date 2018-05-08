import * as reducers from './ducks';
import {combineReducers} from 'redux';

const rootReducer = combineReducers(reducers);
export default rootReducer;