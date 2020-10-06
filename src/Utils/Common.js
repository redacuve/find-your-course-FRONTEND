export function getUser() {
  const userStr = sessionStorage.getItem('user');
  if (userStr) {
    return userStr;
  }
  return null;
}

export function getToken() {
  return sessionStorage.getItem('token') || null;
}

export function removeUserSession() {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
}

export function setUserSession(token, user) {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('user', user);
}

const APIDIR = 'https://find-your-course-api.herokuapp.com/';

export const LoginURL = (email, password) => `${APIDIR}/auth/login?email=${email}&password=${password}`;

export const SignupURL = (username, email, password) => `${APIDIR}/signup?username=${username}&email=${email}&password=${password}`;
