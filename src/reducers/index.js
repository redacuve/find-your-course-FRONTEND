import { combineReducers } from 'redux';
import CoursesReducer from './GetCoursesReducer';
import UserLoginReducer from './UserLoginReducer';

const rootReducer = combineReducers({
  UserLogin: UserLoginReducer,
  GetCourses: CoursesReducer,
});

export default rootReducer;
