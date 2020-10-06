import { combineReducers } from 'redux';
import UserLoginReducer from './UserLoginReducer';

const rootReducer = combineReducers({
  UserLogin: UserLoginReducer,
});

export default rootReducer;
