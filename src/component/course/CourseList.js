import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";
import Items from "./Items";
import { fetchCourses, getCourseError, getCourseStatus, selectAllCourses } from "./courseSlice";
const CourseList = () => {
  const dispatch = useDispatch();

  const courses = useSelector(selectAllCourses);
  const courseStatus = useSelector(getCourseStatus);
  const courseError = useSelector(getCourseError);

  console.log(courseStatus)
  useEffect(() => {
    if (courseStatus === "idle") {
      dispatch(fetchCourses());
    }
  }, [courseStatus, dispatch]);

  let content;

  if (courseStatus === "loading") {
    content = <p>Loading......</p>;
  }

  if (courseStatus === "succeeded") {
    
    content = courses.map((course) => (
      <Items
         id={course.id}
        subject1={course.subject1}
        subject2={course.subject2}
        subject3={course.subject3}
        subject4={course.subject4}
        subject5={course.subject5}
        subject6={course.subject6}
        program = {course.program}
      />
    ));
  }

  if (courseStatus === "failed") {
    content = { courseError };
  }

  return content;
};

export default CourseList;
