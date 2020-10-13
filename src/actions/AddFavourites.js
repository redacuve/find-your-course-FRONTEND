import { FavouritesURL, getToken, getUsername } from '../Utils/Common';
import { setFavourite } from './GetFullCourse';

const ADD_FAVOURITES_SUCCESS = 'ADD_FAVOURITES_SUCCESS';
const ADD_FAVOURITES_ERROR = 'ADD_FAVOURITES_ERROR';

const addFavouritesSuccess = courseId => ({
  type: ADD_FAVOURITES_SUCCESS,
  payload: courseId,
});

const addFavouritesError = error => ({
  type: ADD_FAVOURITES_ERROR,
  payload: error,
});

const addFavouriteToAPI = id => dispatch => {
  fetch(`${FavouritesURL(getUsername())}?course=${id}`, {
    method: 'POST',
    headers: { Authorization: getToken() },
  })
    .then(response => response.json())
    .then(result => {
      if (result.message) {
        dispatch(addFavouritesError(result.message));
      } else {
        dispatch(addFavouritesSuccess(result));
        dispatch(setFavourite(true));
      }
    })
    .catch(error => {
      dispatch(addFavouritesError(error.toString()));
    });
};

export { ADD_FAVOURITES_SUCCESS, ADD_FAVOURITES_ERROR, addFavouriteToAPI };
