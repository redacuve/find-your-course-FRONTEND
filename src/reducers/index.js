import { combineReducers } from 'redux';
import CoursesReducer from './GetCoursesReducer';
import FavouritesReducer from './GetFavouritesCoursesReducer';
import FullCourseReducer from './GetFullCourseReducer';
import UserLoginReducer from './UserLoginReducer';

const rootReducer = combineReducers({
  UserLogin: UserLoginReducer,
  GetCourses: CoursesReducer,
  FavouritesCourses: FavouritesReducer,
  FullCourse: FullCourseReducer,
});

export default rootReducer;
