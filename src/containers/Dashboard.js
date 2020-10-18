import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../Utils/Common';
import { setLogout } from '../actions/UserLogin';
import { getFavourites } from '../actions/GetFavourites';
import Loading from '../components/Loading';
import Error from '../components/Error';
import SingleCourse from '../components/SingleCourse';
import { setTitle } from '../actions/Title';

function Dashboard(props) {
  const user = getUser();
  const dispatch = useDispatch();
  const favourites = useSelector(state => state.FavouritesCourses);
  const { error } = favourites;
  const { loading } = favourites;
  useEffect(() => {
    dispatch(getFavourites());
  }, [dispatch]);
  useEffect(() => {
    dispatch(setTitle('Dashboard'));
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error error={error} />;
  }
  if (favourites.favourites) {
    return (
      <div>
        <h2 className="text-gray-800 font-bold text-sm">{`Welcome ${user}`}</h2>
        <p className="text-lg text-orange-600 mb-4">These are your favorite courses</p>
        <div>
          {favourites.favourites.map(favorite => (
            <SingleCourse
              course={favorite}
              key={favorite.id}
              addToFavourites={null}
            />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      {`Welcome ${user}`}
      <br />
      <br />
      <button
        type="button"
        onClick={() => dispatch(setLogout(props.history))}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Logout
      </button>
    </div>
  );
}

Dashboard.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Dashboard;
