import { GET_COURSES_SUCCESS, GET_COURSES_ERROR } from '../actions/GetCourses';

const initialState = {
  courses: null,
  error: null,
  loading: false,
};

function CoursesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COURSES_SUCCESS:
      return {
        courses: action.payload,
        error: null,
        loading: false,
      };
    case GET_COURSES_ERROR:
      return {
        courses: null,
        error: action.payload,
        loading: false,
      };
    default:
      return { ...state };
  }
}

export default CoursesReducer;
