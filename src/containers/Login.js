import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Warning from '../components/Warning';
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

  const handleLogin = data => {
    dispatch(setLoginError(null));
    dispatch(setLoginLoading(true));
    dispatch(UserLogin(data.email.toLowerCase(), data.password, props.history));
  };

  return (
    <>
      {error && <Warning error={error} />}
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
        <br />
      </form>
    </>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
