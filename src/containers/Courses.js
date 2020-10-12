import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '../actions/GetCourses';
import SingleCourse from '../components/SingleCourse';
import Loading from '../components/Loading';
import Error from '../components/Error';

function Courses() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);
  const courses = useSelector(state => state.GetCourses.courses);
  const loading = useSelector(state => state.GetCourses.loading);
  const error = useSelector(state => state.GetCourses.error);

  const addFavourites = id => {
    console.log(`added ${id}`);
  };

  if (loading) {
    return <Loading />;
  } if (error) {
    return <Error error={error} />;
  } if (courses) {
    return (
      <div>
        {courses.map(course => (
          <SingleCourse
            course={course}
            key={course.id}
            addToFavourites={addFavourites}
          />
        ))}
      </div>
    );
  }
  return <div>Courses</div>;
}

export default Courses;
