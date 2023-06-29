import { useSelector,useDispatch } from "react-redux"
import ProgramItem from "./ProgramItem";
import { selectAllPrograms,getProgramError,getProgramStatus, fetchPrograms } from "./programSlices";
import { useEffect } from "react";
import { fetchAcademicyears } from "../academicyear/academicyearSlices";
function ProgramList(){
    const dispatch = useDispatch();

    const programList = useSelector(selectAllPrograms);
    console.log(programList)
    
    const programStatus = useSelector(getProgramStatus)
    const programError = useSelector(getProgramError)

    useEffect(()=>{
        if(programStatus === 'idle'){
            dispatch(fetchPrograms())
            dispatch(fetchAcademicyears())
        }
    },[programStatus,dispatch])

    let content;

    if(programStatus === 'loading'){
        content = (<p>Loading......</p>)
    }

    if(programStatus === 'succeeded'){
        content = programList.map(
            (program)=>(
                
                    <ProgramItem
                    id = {program.id}
                    programName = {program.programName}
                    programFee = {program.programFee}
                    // academicId = {program.academicyear.id}
                    academicyear = {program.academicyear}
                    />)
                   
    
                   
    
                );
            }
            
    
    if(programStatus === 'failed'){
        content = (<p>{programError}</p>)
    }

    return content;
}

export default ProgramList