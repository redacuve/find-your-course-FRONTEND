import { combineReducers } from 'redux';
import CoursesReducer from './GetCoursesReducer';
import FavouritesReducer from './GetFavouritesCoursesReducer';
import UserLoginReducer from './UserLoginReducer';

const rootReducer = combineReducers({
  UserLogin: UserLoginReducer,
  GetCourses: CoursesReducer,
  FavouritesCourses: FavouritesReducer,
});

export default rootReducer;
