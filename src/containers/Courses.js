import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { getCourses } from '../actions/GetCourses';
import SingleCourse from '../components/SingleCourse';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { setTitle } from '../actions/Title';

function Courses() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);
  useEffect(() => {
    dispatch(setTitle('All Courses'));
  }, []);
  const courses = useSelector(state => state.GetCourses.courses);
  const error = useSelector(state => state.GetCourses.error);
  let s = '';
  const numeric = current => {
    s = `${current} / ${courses.length}`;
  };
  const customPaging = string => <p>{string}</p>;

  if (error) {
    return <Error error={error} />;
  }
  if (courses) {
    s = `1 / ${courses.length}`;
    return (
      <div className="p-3">
        <Slider
          arrows={false}
          dots
          infinite
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          appendDots={() => customPaging(s)}
          beforeChange={(oldIndex, newIndex) => {
            numeric(newIndex + 1);
          }}
          className="shadow-md"
        >
          {courses.map(course => (
            <SingleCourse course={course} key={course.id} />
          ))}
        </Slider>
      </div>
    );
  }
  return <Loading />;
}

export default Courses;
