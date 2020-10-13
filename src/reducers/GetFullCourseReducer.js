import {
  GET_FULL_COURSE_ERROR,
  GET_FULL_COURSE_SUCCESS,
  SET_FAVOURITE,
} from '../actions/GetFullCourse';

const initialState = {
  course: null,
  error: null,
  loading: false,
  favourite: null,
};

function FullCourseReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FULL_COURSE_SUCCESS:
      return {
        course: action.payload.course,
        error: null,
        loading: false,
        favourite: action.payload.favourite,
      };
    case GET_FULL_COURSE_ERROR:
      return {
        course: null,
        error: action.payload,
        loading: false,
        favourite: null,
      };
    case SET_FAVOURITE:
      return {
        ...state,
        favourite: action.payload,
      };
    default:
      return { ...state };
  }
}

export default FullCourseReducer;
