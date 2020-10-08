import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '../actions/GetCourses';

function Courses() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);
  const courses = useSelector(state => state.GetCourses);
  return (<div>Courses</div>);
}

export default Courses;
