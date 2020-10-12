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
  const error = useSelector(state => state.GetCourses.error);

  if (error) {
    return <Error error={error} />;
  } else if (courses) {
    return (
      <div>
        {courses.map(course => (
          <SingleCourse
            course={course}
            key={course.id}
          />
        ))}
      </div>
    );
  }
  return <Loading />;
}

export default Courses;
