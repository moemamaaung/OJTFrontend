import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApplicants, getApplicantError, getApplicantStatus, selectAllApplicants } from './applicantSlice'
import ViewApplicantItem from './ViewApplicantItem'


const ViewApplicant = () => {
    const dispatch = useDispatch()

    const applicants = useSelector(selectAllApplicants)
    let applicant;
    console.log(applicants)

    if(applicants.length === 0){
       applicant = applicants
    }else{
        applicant = applicants[ applicants.length - 1]
    }

    console.log("Last Applicant : "+applicant)
    const applicantStatus = useSelector(getApplicantStatus)
    console.log(applicantStatus)
    const error = useSelector(getApplicantError)

    useEffect(() => {
        
             dispatch(fetchApplicants())
      
    },[])


    let content;

    if(applicantStatus === 'loading'){
        content = (<p>Loading.....</p>)
    }
    if(applicantStatus === 'succeeded'){
        console.log()
        content = 
            (
                <ViewApplicantItem
               
                id={applicant.id}
                fullname={applicant.fullname}
                username={applicant.username}
                phno={applicant.phno}
                street={applicant.street}
                township={applicant.township}
                city={applicant.city}
                gender={applicant.gender}
                program = {applicant.program}
                />
                
            )
        
    }
    if(applicantStatus === 'failed'){
        content =(<p>{error}</p>)
    }


  return content

}

export default ViewApplicant