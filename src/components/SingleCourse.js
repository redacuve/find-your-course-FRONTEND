import React from 'react';
import PropType from 'prop-types';

function SingleCourse({ course, addToFavourites }) {
  const {
    id, name, description, price, image,
  } = course;
  return (
    <div className="">
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
      <button type="button" onClick={() => addToFavourites(id)}>
        Add to favorites
      </button>
    </div>
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
  addToFavourites: PropType.func.isRequired,
};

export default SingleCourse;
