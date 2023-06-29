import { useSelector,useDispatch } from "react-redux";
import { selectAllMarks,getMarkError,getMarkStatus,fetchMarks } from "./markSlice";
import { useEffect } from "react";
import MarkItems from "./MarkItems";
import { useLocation } from "react-router-dom";
import { selectUserById } from "../features/user/userSlice";

const MarkList = () => {
  // const locatin = useLocation();
  // const { fullname } =locatin.state;
  // console.log(fullname)

  // const user = useSelector((state)=>selectUserById(state,Number(userId)));
  // console.log(user)

    const marks = useSelector(selectAllMarks);
    const markStatus = useSelector(getMarkStatus);
    const markError = useSelector(getMarkError);
    console.log(marks)

    const dispatch = useDispatch();

    useEffect(() => {
        if (markStatus === "idle") {
          dispatch(fetchMarks());
        }
      }, [markStatus, dispatch]);

      let content;

      if (markStatus === "loading") {
        content = <p>Loading......</p>;
      }

      if(markStatus === "succeed"){
       
        content = marks.map((mark)=>(
          
            <MarkItems 
                id = {mark.id}
                subject1Score = {mark.subject1Score}
                subject2Score = {mark.subject2Score}
                subject3Score = {mark.subject3Score}
                subject4Score = {mark.subject4Score}
                subject5Score = {mark.subject5Score}
                subject6Score = {mark.subject6Score}
                exam = {mark.exam}
                program = {mark.course.program}
                course = {mark.course}
                fullname = {mark.fullname}
                
            />
        ))
      }

      if(markStatus === "failed"){
        content = { markError }
      }

  return  content;
  
}

export default MarkList