import { CoursesURL, getToken } from '../Utils/Common';

const GET_COURSES_SUCCESS = 'GET_COURSES_SUCCESS';
const GET_COURSES_ERROR = 'GET_COURSES_ERROR';

const coursesSuccess = courses => ({
  type: GET_COURSES_SUCCESS,
  payload: courses,
});

const coursesError = error => ({
  type: GET_COURSES_ERROR,
  payload: error,
});

const getCourses = () => dispatch => {
  fetch(CoursesURL, { method: 'GET', headers: { Authorization: getToken() } })
    .then(response => response.json())
    .then(result => {
      if (result.message) {
        dispatch(coursesError(result.message));
      } else {
        dispatch(coursesSuccess(result));
      }
    })
    .catch(error => {
      dispatch(coursesError(error));
    });
};

export { GET_COURSES_SUCCESS, GET_COURSES_ERROR, getCourses };
