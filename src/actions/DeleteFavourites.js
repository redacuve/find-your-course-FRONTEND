import { FavouritesURL, getToken, getUsername } from '../Utils/Common';
import { setFavourite } from './GetFullCourse';

const DELETE_FAVOURITES_SUCCESS = 'DELETE_FAVOURITES_SUCCESS';
const DELETE_FAVOURITES_ERROR = 'DELETE_FAVOURITES_ERROR';

const deleteFavouritesSuccess = courseId => ({
  type: DELETE_FAVOURITES_SUCCESS,
  payload: courseId,
});

const deleteFavouritesError = error => ({
  type: DELETE_FAVOURITES_ERROR,
  payload: error,
});

const deleteFavouriteToAPI = id => dispatch => {
  fetch(`${FavouritesURL(getUsername())}?course=${id}`, {
    method: 'DELETE',
    headers: { Authorization: getToken() },
  })
    .then(response => {
      if (response.message) {
        dispatch(deleteFavouritesError(response.message));
      } else {
        dispatch(deleteFavouritesSuccess(null));
        dispatch(setFavourite(false));
      }
    })
    .catch(error => {
      dispatch(deleteFavouritesError(error.toString()));
    });
};

export {
  DELETE_FAVOURITES_SUCCESS,
  DELETE_FAVOURITES_ERROR,
  deleteFavouriteToAPI,
};
