import authReducer from './AuthReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  auth: authReducer,
});

export default reducers;
