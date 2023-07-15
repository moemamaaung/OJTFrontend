import { useEffect} from "react";
import { useDispatch , useSelector} from "react-redux";
import LecturerItems from "./LecturerItems";
import { fetchLecturers,getLecturerStatus,getLecturerError,getAllLecturers } from "./lecturerSlice";

export const LecturerList = () => {

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
      <LecturerItems
        id = {lecturer.id}
        profile={lecturer.profile}
        name = {lecturer.name}
        email = {lecturer.email}
        phoneNo = {lecturer.phoneNo}
        address = {lecturer.address}      
        gender = {lecturer.gender}
        age = {lecturer.age}
        qualification = {lecturer.qualification}
      />
    ));
  }
  
  if (lecturerStatus === "failed") {
    content = { lecturerError };
  }

  return  content;

}
export default LecturerList;
