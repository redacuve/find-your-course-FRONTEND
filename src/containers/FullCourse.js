import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getCourse } from '../actions/GetFullCourse';

function FullCourse({ match }) {
  const { id } = match.params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourse(id));
  }, [dispatch, id]);
  const singleCourse = useSelector(state => state.FullCourse.course);
  return (
    <div>
      FullCourse
    </div>
  );
}

FullCourse.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string.isRequired }),
  }).isRequired,
};

export default FullCourse;
