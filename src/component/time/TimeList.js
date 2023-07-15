import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react";
import TimeItem from "./TimeItem";
import { fetchTime, getTimeError, getTimeStatus, selectAllTimes } from "./timeSlice";
import { fetchPrograms } from "../program/programSlices";


function TimeList () {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchTime())
     
    },[dispatch])

    const timetables = useSelector(selectAllTimes);
    console.log("timetableList"+timetables)
    const timetableStatus = useSelector(getTimeStatus)
    const timetableError = useSelector(getTimeError)

    useEffect(()=>{
        if(timetableStatus === 'idle'){
            dispatch(fetchTime())
            dispatch(fetchPrograms())
    
        }
    },[timetableStatus,dispatch])

    let content;

    if(timetableStatus === 'loading'){
        content = (<p>Loading......</p>)
    }

    if(timetableStatus === 'succeeded'){
        content = timetables.map(
            (timetable)=>(
                
                    <TimeItem
                    id = {timetable.id}
                    subk = {timetable.subk}  
                    subject = {timetable.subject}   
                    subName = {timetable.subName}   
                    sub = {timetable.sub} 
                    suba = {timetable.suba}    
                    subb = {timetable.subb}    
                    subc = {timetable.subc}           
                    subd = {timetable.subd}    
                    sube = {timetable.sube}    
                    subf = {timetable.subf}    
                    subg = {timetable.subg}    
                    subh = {timetable.subh}  
                    subi = {timetable.subi}    
                    subj = {timetable.subj}  
                    subl = {timetable.subl}
                    subm = {timetable.subm}
                    subn = {timetable.subn}    
                    subo = {timetable.subo}  
                    subp = {timetable.subp}
                    subq = {timetable.subq}
                    //programId = {timetable.program.id}
                    program = {timetable.program}

                    />)
  
                );
            }
        
    
    if(timetableStatus === 'failed'){
        content = (<p>{timetableError}</p>)
    }
    console.log("TimetableList"+timetableStatus)

    return content;
}

export default TimeList