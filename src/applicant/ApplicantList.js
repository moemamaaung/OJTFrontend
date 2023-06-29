import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ApplicantItem from './ApplicantItem'

import { fetchApplicants, getApplicantError, getApplicantStatus, selectAllApplicants } from './applicantSlice'

const ApplicantList = () => {
    const dispatch = useDispatch()

    const applicants = useSelector(selectAllApplicants)
    const applicantStatus = useSelector(getApplicantStatus)
    const error = useSelector(getApplicantError)

    useEffect(() => {
        if(applicantStatus === 'idle'){
             dispatch(fetchApplicants())
           
        }
    },[applicantStatus,dispatch])


    let content;

    if(applicantStatus === 'loading'){
        content = (<p>Loading.....</p>)
    }
    if(applicantStatus === 'succeeded'){
        console.log()
        content = applicants.map(
            (applicant) => (
                <ApplicantItem
                id={applicant.id}
                name={applicant.name}
                email={applicant.email}
                phno={applicant.phno}
                gender={applicant.gender}
                edu={applicant.edu}
                exp={applicant.exp}
               
            //    startDate={applicant.edu.startDate}
            //    endDate={applicant.edu.endDate}
            //     street={applicant.street}
            //     township={applicant.township}
            //     city={applicant.city}
            //     gender={applicant.gender}
                />
                
            )
        )
    }
    if(applicantStatus === 'failed'){
        content =(<p>{error}</p>)
    }


  return content
}

export default ApplicantList