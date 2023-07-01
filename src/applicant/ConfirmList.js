import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchConfirmApplicants, getAllConfirmApplicant, getConfirmApplicantError, getConfirmApplicantStatus } from './confirmSlice'
import ConfirmItem from './ConfirmItem'

const ConfirmList = () => {
    const dispatch = useDispatch()

    const confirms = useSelector(getAllConfirmApplicant)
    const confirmStatus = useSelector(getConfirmApplicantStatus)
    const error = useSelector(getConfirmApplicantError)

    useEffect(() => {
        if(confirmStatus === 'idle'){
             dispatch(fetchConfirmApplicants())
           
        }
    },[confirmStatus,dispatch])


    let content;

    if(confirmStatus === 'loading'){
        content = (<p>Loading.....</p>)
    }
    if(confirmStatus === 'succeeded'){
        console.log(confirmStatus)
        content = confirms.map(
            (confirm) => (
                <ConfirmItem
                id={confirm.id}
                fullname={confirm.fullname}
                username={confirm.username}
                phno={confirm.phno}
                gender={confirm.gender}
                street={confirm.street}
                township={confirm.township}
                city={confirm.city}
                />
                
            )
        )
    }
    if(confirmStatus === 'failed'){
        content =(<p>{error}</p>)
    }


  return content
}

export default ConfirmList