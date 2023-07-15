import { useEffect} from "react";
import { useDispatch , useSelector} from "react-redux";
import { fetchLecturers,getLecturerStatus,getLecturerError,getAllLecturers } from "./lecturerSlice";
import TeacherItem from "./TeacherItem";

const TeacherList = () => {
  const dispatch = useDispatch();

  const lecturers = useSelector(getAllLecturers);
  const lecturerStatus = useSelector(getLecturerStatus);
  const lecturerError = useSelector(getLecturerError);

  useEffect(() => {
    if (lecturerStatus === "idle") {
      dispatch(fetchLecturers());
    }
  }, [lecturerStatus, dispatch]);


  let content;

  if (lecturerStatus === "loading") {
    content = <p>Loading......</p>;
  }

  if (lecturerStatus === "succeeded") {
    
    content = lecturers.map((lecturer) => (
      <TeacherItem
        id = {lecturer.id}
        profile={lecturer.profile}
        name = {lecturer.name}
        qualification = {lecturer.qualification}
      />
    ));
  }
  
  if (lecturerStatus === "failed") {
    content = { lecturerError };
  }

  return  content;
}

export default TeacherList