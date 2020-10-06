import {
  LoginURL, removeUserSession, setUserSession, SignupURL,
} from '../Utils/Common';

const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
const USER_LOGIN_LOADING = 'USER_LOGIN_LOADING';
const USER_LOGIN_LOGOUT = 'USER_LOGIN_LOGOUT';
const USER_LOGIN_LOGIN = 'USER_LOGIN_LOGIN';

const setLoginError = error => ({
  type: USER_LOGIN_ERROR,
  payload: error,
});

const setLoginLoading = loading => ({
  type: USER_LOGIN_LOADING,
  payload: loading,
});

const setLogin = (token, email, username) => ({
  type: USER_LOGIN_LOGIN,
  payload: { token, email, username },
});

const setLogout = history => {
  removeUserSession();
  history.push('/login');
  return ({
    type: USER_LOGIN_LOGOUT,
  });
};

const UserLogin = (email, password, history) => dispatch => {
  fetch(LoginURL(email, password), {
    method: 'POST',
  })
    .then(response => response.json())
    .then(result => {
      if (result.auth_token) {
        setUserSession(result.auth_token, email);
        dispatch(setLogin(result.auth_token, email, result.username));
        history.push('/dashboard');
      } else {
        dispatch(setLoginError(result.message));
      }
    })
    .catch(error => {
      dispatch(setLoginError(error));
    });
};

const UserSignup = (username, email, password, history) => dispatch => {
  fetch(SignupURL(username, email, password), {
    method: 'POST',
  })
    .then(response => response.json())
    .then(result => {
      if (result.auth_token) {
        setUserSession(result.auth_token, email);
        dispatch(setLogin(result.auth_token, email, result.username));
        history.push('/dashboard');
      } else {
        dispatch(setLoginError(result.message));
      }
    })
    .catch(error => {
      dispatch(setLoginError(error));
    });
};

export {
  USER_LOGIN_ERROR,
  USER_LOGIN_LOADING,
  USER_LOGIN_LOGOUT,
  USER_LOGIN_LOGIN,
  UserLogin,
  UserSignup,
  setLoginError,
  setLoginLoading,
  setLogout,
  setLogin,
};
