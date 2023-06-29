import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMarks, getMarkError, getMarkStatus, selectUserMarkById } from '../../mark/markSlice';
import MItems from './MItems';

const MList = () => {
    const dispatch = useDispatch();

 
    const markStatus = useSelector(getMarkStatus);
    const markError = useSelector(getMarkError);
  
    const loginUser = useSelector(state => state.auths.user);
    console.log(loginUser)
    const pfullname = loginUser.program.id;
    console.log("In the user profile Form id is :" + pfullname);
  
    useEffect(() => {
      if (markStatus === "idle") {
        dispatch(fetchMarks());
      }
    }, [markStatus, dispatch]);
  
    const mark = useSelector((state) => selectUserMarkById(state,pfullname))
    console.log(mark)
    console.log(markStatus)
  
    let content;
  
    // if (markStatus === "loading") {
    //   content = <p>Loading......</p>;
    // }
  
    if (markStatus === "succeed") {
      
      content =  <MItems
           id={mark.id}
          subject1Score={mark.subject1Score}
          subject2Score={mark.subject2Score}
          subject3Score={mark.subject3Score}
          subject4Score={mark.subject4Score}
          subject5Score={mark.subject5Score}
          subject6Score={mark.subject6Score}
          fullname = {mark.fullname}
          exam = {mark.exam}
          program = {mark.course.program}
          course = {mark.course}
        />
      
    }
  
    if (markStatus === "failed") {
      content = { markError };
    }
  
  
    return content;
  };
  


export default MList