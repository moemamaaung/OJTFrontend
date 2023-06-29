import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApplicants, getApplicantError, getApplicantStatus, selectAllApplicants } from './applicantSlice'
import ViewApplicantItem from './ViewApplicantItem'


const ViewApplicant = () => {
    const dispatch = useDispatch()

    const applicants = useSelector(selectAllApplicants)
    const applicant = applicants[applicants.length -1]
    console.log("Applicants : "+applicant)
    const applicantStatus = useSelector(getApplicantStatus)
    console.log(applicantStatus)
    const error = useSelector(getApplicantError)

    useEffect(() => {
        
        if(applicantStatus === 'idle'){
             dispatch(fetchApplicants())
            
        }
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
                id={Number(applicant.id)}
                name={applicant.name}
                email={applicant.email}
                phno={applicant.phno}
                street={applicant.street}
                township={applicant.township}
                city={applicant.city}
                gender={applicant.gender}
                />
                
            )
        
    }
    if(applicantStatus === 'failed'){
        content =(<p>{error}</p>)
    }


  return content

}

export default ViewApplicant