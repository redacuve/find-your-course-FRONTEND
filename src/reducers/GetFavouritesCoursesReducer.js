import { GET_FAVOURITES_ERROR, GET_FAVOURITES_SUCCESS, SET_FAVOURITES_LOADING } from '../actions/GetFavourites';

const initialState = {
  favourites: null,
  error: null,
  loading: false,
};

function FavouritesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FAVOURITES_SUCCESS:
      return {
        favourites: action.payload,
        error: null,
        loading: false,
      };
    case GET_FAVOURITES_ERROR:
      return {
        favourites: null,
        error: action.payload,
        loading: false,
      };
    case SET_FAVOURITES_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return { ...state };
  }
}

export default FavouritesReducer;
