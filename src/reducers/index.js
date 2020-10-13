import { combineReducers } from 'redux';
import CoursesReducer from './GetCoursesReducer';
import FavouritesReducer from './GetFavouritesCoursesReducer';
import FullCourseReducer from './GetFullCourseReducer';
import UserLoginReducer from './UserLoginReducer';
import TitleReducer from './TitleReducer';
import SingleFavouriteReducer from './Favourite';

const rootReducer = combineReducers({
  UserLogin: UserLoginReducer,
  GetCourses: CoursesReducer,
  FavouritesCourses: FavouritesReducer,
  FullCourse: FullCourseReducer,
  Title: TitleReducer,
  Favorite: SingleFavouriteReducer,
});

export default rootReducer;
