import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getCourse } from '../actions/GetFullCourse';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { setTitle } from '../actions/Title';
import Placeholder from '../assets/img/placeholder.png';
import { addFavouriteToAPI } from '../actions/AddFavourites';
import { deleteFavouriteToAPI } from '../actions/DeleteFavourites';

function FullCourse({ match }) {
  const { id } = match.params;
  const dispatch = useDispatch();
  const singleCourse = useSelector(state => state.FullCourse.course);
  const error = useSelector(state => state.FullCourse.error);
  const favourite = useSelector(state => state.FullCourse.favourite);
  useEffect(() => {
    dispatch(getCourse(id));
  }, [dispatch, id]);
  useEffect(() => {
    if (singleCourse) {
      dispatch(setTitle(singleCourse.name));
    }
  }, [dispatch, singleCourse]);

  const addToFavourites = () => {
    dispatch(addFavouriteToAPI(id));
  };

  const removeToFavourites = () => {
    dispatch(deleteFavouriteToAPI(id));
  };

  if (error) {
    return <Error error={error} />;
  }
  if (singleCourse) {
    return (
      <div>
        <div>
          <img
            src={singleCourse.image ? singleCourse.image : Placeholder}
            alt={singleCourse.name}
          />
        </div>
        <p className="text-gray-700">{singleCourse.description}</p>
        <p className="text-orange-500">
          $
          {singleCourse.price}
          {' '}
          USD
        </p>
        <button type="button" onClick={favourite ? removeToFavourites : addToFavourites}>
          {favourite ? 'Remove from Favourites' : 'Add to Favourite' }
        </button>
      </div>
    );
  }
  return <Loading />;
}

FullCourse.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string.isRequired }),
  }).isRequired,
};

export default FullCourse;
