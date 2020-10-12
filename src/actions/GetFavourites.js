import { FavouritesURL, getToken, getUsername } from '../Utils/Common';

const GET_FAVOURITES_SUCCESS = 'GET_FAVOURITES_SUCCESS';
const GET_FAVOURITES_ERROR = 'GET_FAVOURITES_ERROR';
const SET_FAVOURITES_LOADING = 'SET_FAVOURITES_LOADING';

const favouritesSuccess = favourites => ({
  type: GET_FAVOURITES_SUCCESS,
  payload: favourites,
});

const favouritesError = error => ({
  type: GET_FAVOURITES_ERROR,
  payload: error,
});

const setFavouritesLoading = loading => ({
  type: SET_FAVOURITES_LOADING,
  payload: loading,
});

const getFavourites = () => dispatch => {
  fetch(FavouritesURL(getUsername()), {
    method: 'GET',
    headers: { Authorization: getToken() },
  })
    .then(response => response.json())
    .then(result => {
      if (result.message) {
        dispatch(favouritesError(result.message));
      } else {
        dispatch(favouritesSuccess(result));
      }
    })
    .catch(error => {
      dispatch(favouritesError(error.toString()));
    });
};

export {
  GET_FAVOURITES_SUCCESS,
  GET_FAVOURITES_ERROR,
  SET_FAVOURITES_LOADING,
  getFavourites,
  setFavouritesLoading,
};
