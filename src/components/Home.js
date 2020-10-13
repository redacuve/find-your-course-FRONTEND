import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTitle } from '../actions/Title';
import Background from '../assets/img/background.jpg';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle('Find Your Courses'));
  }, []);
  const style = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
  };
  return (
    <div className="home flex items-center" style={style}>
      <div>
        <h2 className="text-center text-3xl font-bold text-white pb-5">
          Find your Course Anywhere
        </h2>
        <p className="font-bold text-white text-center underline">
          The Learning platform
        </p>
        <div>
          <p className="text-white text-center">
            Start free today Create your free account
          </p>
          <div className="text-center pt-3">
            <Link
              to="/signup"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 border border-orange-700 rounded"
            >
              Sign in
            </Link>
            <span className="text-white">or</span>
            <Link
              to="/login"
              className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
