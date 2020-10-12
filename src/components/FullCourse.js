import React from 'react';
import PropTypes from 'prop-types';

function FullCourse({ match }) {
  const { id } = match.params;
  return (
    <div>
      Full Course
      {id}
    </div>
  );
}

FullCourse.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string.isRequired }),
  }).isRequired,
};

export default FullCourse;
