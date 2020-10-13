import {
  ADD_FAVOURITES_ERROR,
  ADD_FAVOURITES_SUCCESS,
} from '../actions/AddFavourites';
import {
  DELETE_FAVOURITES_ERROR,
  DELETE_FAVOURITES_SUCCESS,
} from '../actions/DeleteFavourites';

const initialState = {
  error: null,
};

function SingleFavouriteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVOURITES_ERROR:
    case DELETE_FAVOURITES_ERROR:
      return { error: action.payload };
    case ADD_FAVOURITES_SUCCESS:
    case DELETE_FAVOURITES_SUCCESS:
      return { error: null };
    default:
      return { ...state };
  }
}

export default SingleFavouriteReducer;
