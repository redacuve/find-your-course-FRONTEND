import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import Placeholder from '../assets/img/placeholder.jpg';

function SingleCourse({ course }) {
  const {
    id, name, price, image,
  } = course;
  return (
    <Link to={`/courses/${id}`}>
      <div className="w-full">
        <img className="w-full" src={image || Placeholder} alt={name} />
      </div>
      <div className="flex flex-wrap items-center mt-2">
        <h2 className="font-bold w-3/4">{name}</h2>
        <p className="text-orange-500 w-1/4 text-center text-sm">
          $
          {price}
          {' '}
          USD
        </p>
      </div>
    </Link>
  );
}

SingleCourse.propTypes = {
  course: PropType.shape({
    id: PropType.number.isRequired,
    name: PropType.string.isRequired,
    description: PropType.string.isRequired,
    price: PropType.number.isRequired,
    image: PropType.string,
  }).isRequired,
};

export default SingleCourse;
