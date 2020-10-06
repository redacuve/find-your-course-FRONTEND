import { getToken, getUser } from '../Utils/Common';
import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_LOGIN_LOADING,
  USER_LOGIN_LOGOUT,
  USER_LOGIN_LOGIN,
} from '../actions/UserLogin';

const initialState = {
  token: getToken(),
  user: getUser(),
  loading: false,
  error: null,
};

function UserLoginReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        error: null,
        loading: false,
      };
    case USER_LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
        token: null,
        loading: false,
      };
    case USER_LOGIN_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case USER_LOGIN_LOGOUT:
      return {
        token: null,
        user: null,
        loading: false,
        error: null,
      };
    case USER_LOGIN_LOGIN:
      return {
        token: action.payload.token,
        user: action.payload.email,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}

export default UserLoginReducer;
