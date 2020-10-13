import { fullCourseURL, getToken } from '../Utils/Common';

const GET_FULL_COURSE_SUCCESS = 'GET_FULL_COURSE_SUCCESS';
const GET_FULL_COURSE_ERROR = 'GET_FULL_COURSE_ERROR';
const SET_FAVOURITE = 'SET_FAVOURITE';

const courseSuccess = course => ({
  type: GET_FULL_COURSE_SUCCESS,
  payload: course,
});

const courseError = error => ({
  type: GET_FULL_COURSE_ERROR,
  payload: error,
});

const setFavourite = favourite => ({
  type: SET_FAVOURITE,
  payload: favourite,
});

const getCourse = id => dispatch => {
  fetch(fullCourseURL(id), { method: 'GET', headers: { Authorization: getToken() } })
    .then(response => response.json())
    .then(result => {
      if (result.message) {
        dispatch(courseError(result.message));
      } else {
        dispatch(courseSuccess(result));
      }
    })
    .catch(error => {
      dispatch(courseError(error.toString()));
    });
};

export {
  GET_FULL_COURSE_SUCCESS, GET_FULL_COURSE_ERROR, SET_FAVOURITE, getCourse, setFavourite,
};
