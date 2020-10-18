import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getCourse } from '../actions/GetFullCourse';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { setTitle } from '../actions/Title';
import Placeholder from '../assets/img/placeholder.jpg';
import { addFavouriteToAPI } from '../actions/AddFavourites';
import { deleteFavouriteToAPI } from '../actions/DeleteFavourites';

function FullCourse({ match }) {
  const { id } = match.params;
  const dispatch = useDispatch();
  const singleCourse = useSelector(state => state.FullCourse.course);
  const error = useSelector(state => state.FullCourse.error);
  const favourite = useSelector(state => state.FullCourse.favourite);
  const tags = useSelector(state => state.FullCourse.tags);

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

  const favouriteClass = 'bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 hover:border-orange-500 w-full';
  const removeClass = 'bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 hover:border-red-500 w-full';

  if (error) {
    return <Error error={error} />;
  }
  if (singleCourse) {
    return (
      <div>
        <div className="w-full relative">
          <img
            src={singleCourse.image ? singleCourse.image : Placeholder}
            alt={singleCourse.name}
            className="w-full"
          />
          <p className="text-white absolute right-0 bottom-0">
            $
            {singleCourse.price}
            {' '}
            USD
          </p>
        </div>
        <div className="p-2">
          <h2>About this course</h2>
          <p className="text-gray-700">{singleCourse.description}</p>
          <div>
            <h3>Tags</h3>
            <ul className="font-bold text-gray-700 flex flex-wrap">
              {tags && tags.map(tag => (
                <li key={tag.title} className="pr-1">
                  {`#${tag.title}`}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
          type="button"
          onClick={favourite ? removeToFavourites : addToFavourites}
          className={favourite ? removeClass : favouriteClass}
        >
          {favourite ? 'Remove from Favourites' : 'Add to Favourite'}
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
