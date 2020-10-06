import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  UserLogin,
  setLoginLoading,
  setLoginError,
} from '../actions/UserLogin';

function Login(props) {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const error = useSelector(state => state.UserLogin.error);
  const loading = useSelector(state => state.UserLogin.loading);

  // useEffect(() => {
  //  if (token && user){
  //    props.history.push('/dashboard');
  //    setUserSession(token, user)
  //    console.log('jala de nyevo')
  //  }
  // }, [token, user, props.history])

  const handleLogin = data => {
    dispatch(setLoginError(null));
    dispatch(setLoginLoading(true));
    dispatch(UserLogin(data.email, data.password, props.history));

    // console.log(`login store token ${login_store.token}`)
    // if (login_store.token !== null){
    //  setUserSession(login_store.token, data.email)
    //  dispatch(setLoginLoading(false));
    //  dispatch(setLoginError(null));
    //  props.history.push('/dashboard');
    // } else {
    //  dispatch(setLoginLoading(false));
    // }
    // const result = getToken(data.email, data.password);
    // result.then(res => {
    //   if (res.auth_token) {
    //     setUserSession(res.auth_token, data.email);
    //     setLoading(false);
    //     props.history.push('/dashboard');
    //   } else {
    //     setLoading(false);
    //     setError(res.message);
    //   }
    // });
  };

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit(handleLogin)}
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="E-mail"
          name="email"
          ref={register({ required: true })}
        />
        {errors.email && (
          <span className="text-red-500 text-xs italic">
            This field is required
          </span>
        )}
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          name="password"
          placeholder="******************"
          ref={register({ required: true })}
        />
        {errors.password && (
          <span className="text-red-500 text-xs italic">
            This field is required
          </span>
        )}
      </div>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Log In'}
        </button>
      </div>
      {error && (
        <>
          <small style={{ color: 'red' }}>{error}</small>
          <br />
        </>
      )}
      <br />
    </form>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
