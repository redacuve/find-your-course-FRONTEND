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

export function getUsername() {
  return sessionStorage.getItem('username') || null;
}

export function removeUserSession() {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
  sessionStorage.removeItem('username');
}

export function setUserSession(token, user, username) {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('user', user);
  sessionStorage.setItem('username', username);
}

const APIDIR = 'https://find-your-course-api.herokuapp.com/';

export const LoginURL = (email, password) => `${APIDIR}/auth/login?email=${email}&password=${password}`;
export const SignupURL = (username, email, password) => `${APIDIR}/signup?username=${username}&email=${email}&password=${password}`;
export const CoursesURL = `${APIDIR}/courses`;
export const FavouritesURL = username => `${APIDIR}/${username}/favourites`;
