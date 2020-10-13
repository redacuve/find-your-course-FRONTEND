import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Warning from '../components/Warning';
import {
  setLoginError,
  setLoginLoading,
  UserSignup,
} from '../actions/UserLogin';
import { setTitle } from '../actions/Title';

function Signup(props) {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const error = useSelector(state => state.UserLogin.error);
  const loading = useSelector(state => state.UserLogin.loading);

  useEffect(() => {
    dispatch(setTitle('Sign Up'));
  }, []);

  const handleSignup = data => {
    dispatch(setLoginError(null));
    dispatch(setLoginLoading(true));
    dispatch(
      UserSignup(
        data.username.toLowerCase(),
        data.email.toLowerCase(),
        data.password,
        props.history,
      ),
    );
  };

  return (
    <>
      {error && <Warning error={error} />}
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(handleSignup)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            name="username"
            ref={register({ required: true })}
          />
          {errors.username && (
            <span className="text-red-500 text-xs italic">
              This field is required
            </span>
          )}
        </div>
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
            {loading ? 'Loading...' : 'Sign In'}
          </button>
        </div>
        <br />
      </form>
    </>
  );
}

Signup.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Signup;
