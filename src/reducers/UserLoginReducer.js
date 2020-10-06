import { getToken, getUser, getUsername } from '../Utils/Common';
import {
  USER_LOGIN_ERROR,
  USER_LOGIN_LOADING,
  USER_LOGIN_LOGOUT,
  USER_LOGIN_LOGIN,
} from '../actions/UserLogin';

const initialState = {
  token: getToken(),
  user: getUser(),
  username: getUsername(),
  loading: false,
  error: null,
};

function UserLoginReducer(state = initialState, action) {
  switch (action.type) {
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
        username: null,
        loading: false,
        error: null,
      };
    case USER_LOGIN_LOGIN:
      return {
        token: action.payload.token,
        user: action.payload.email,
        username: action.payload.username,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}

export default UserLoginReducer;
