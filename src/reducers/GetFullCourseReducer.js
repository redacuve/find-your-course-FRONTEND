import { GET_FULL_COURSE_ERROR, GET_FULL_COURSE_SUCCESS } from '../actions/GetFullCourse';

const initialState = {
  course: null,
  error: null,
  loading: false,
};

function FullCourseReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FULL_COURSE_SUCCESS:
      return {
        course: action.payload,
        error: null,
        loading: false,
      };
    case GET_FULL_COURSE_ERROR:
      return {
        course: null,
        error: action.payload,
        loading: false,
      };
    default:
      return { ...state };
  }
}

export default FullCourseReducer;
