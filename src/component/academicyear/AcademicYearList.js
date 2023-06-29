import { useDispatch, useSelector } from "react-redux";
import { fetchAcademicyears, getAcademicyearError, getAcademicyearStatus, selectAllAcademicyears } from "./academicyearSlices";
import AcademicYearItem from "./AcademicYearItem";
import { useEffect } from "react";

function AcademicyearList() {
  const dispatch = useDispatch();

    const academicyears = useSelector(selectAllAcademicyears);
    const academicyearStatus = useSelector(getAcademicyearStatus)
    const academicyearError = useSelector(getAcademicyearError)

    useEffect(()=>{
        if(academicyearStatus === 'idle'){
            dispatch(fetchAcademicyears())
        }
    },[academicyearStatus,dispatch])

    let content;

    if(academicyearStatus === 'loading'){
        content = (<p>Loading......</p>)
    }

    if(academicyearStatus === 'succeeded'){
        content = academicyears.map(
            (academic)=>(
                
                    <AcademicYearItem
                    id = {academic.id}
                    value = {academic.value}
                    
                   
                   
                    />)
  
                );
            }
        
    
    if(academicyearStatus === 'failed'){
        content = (<p>{academicyearError}</p>)
    }
    console.log("TimetableList"+academicyearStatus)

    return content;
}

export default AcademicyearList