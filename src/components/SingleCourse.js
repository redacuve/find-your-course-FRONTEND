import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';

function SingleCourse({ course }) {
  const {
    id, name, description, price, image,
  } = course;
  return (
    <Link to={`/courses/${id}`} className="">
      <h2 className="font-bold">{name}</h2>
      {image && (
        <div>
          <img src={image} alt={name} />
        </div>
      )}
      <p className="text-gray-700">{description}</p>
      <p className="text-orange-500">
        $
        {price}
        {' '}
        USD
      </p>
      )
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
