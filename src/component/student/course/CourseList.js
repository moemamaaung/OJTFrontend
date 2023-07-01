import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";

import { fetchCourses, getCourseError, getCourseStatus, selectAllCourses } from "../../course/courseSlice";
import { selectProgramCourseById } from "../../course/courseSlice";
import CourseItem from "./CourseItem"
import { getUser } from "../../features/auth/authSlice";

const CourseList = () => {
  const dispatch = useDispatch();

  // const courses = useSelector(selectAllCourses);
  const courseStatus = useSelector(getCourseStatus);
  const courseError = useSelector(getCourseError);

  
  const loginUser = useSelector(getUser);
  
  console.log(loginUser)

  const pId = loginUser.program.id

  console.log("PPPPPPPPPPPPPPPPPPPPPPPPPP")
  console.log("In the user profile Form id is :" + pId);

  useEffect(() => {
    if (courseStatus === "idle") {
      dispatch(fetchCourses());
    }
  }, [courseStatus, dispatch]);

  const course = useSelector((state) => selectProgramCourseById(state, Number(pId)))
  console.log(course)

  let content;

  if (courseStatus === "loading") {
    content = <p>Loading......</p>;
  }

  if (courseStatus === "succeeded") {
    
    content =  <CourseItem
        // id={course.id}
        subject1={course.subject1}
        subject2={course.subject2}
        subject3={course.subject3}
        subject4={course.subject4}
        subject5={course.subject5}
        subject6={course.subject6}
        program = {course.program}
      />
    
  }

  if (courseStatus === "failed") {
    content = { courseError };
  }


  return content;
};

export default CourseList;
