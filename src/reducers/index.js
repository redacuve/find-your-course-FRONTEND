import { combineReducers } from 'redux';
import CoursesReducer from './GetCoursesReducer';
import FavouritesReducer from './GetFavouritesCoursesReducer';
import FullCourseReducer from './GetFullCourseReducer';
import UserLoginReducer from './UserLoginReducer';
import TitleReducer from './TitleReducer';

const rootReducer = combineReducers({
  UserLogin: UserLoginReducer,
  GetCourses: CoursesReducer,
  FavouritesCourses: FavouritesReducer,
  FullCourse: FullCourseReducer,
  Title: TitleReducer,
});

export default rootReducer;
