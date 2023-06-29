import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEdus, getEdusError, getEdusStatus, selectAllEdus } from './edubackgroundSlice'
import EduBackgroundItem from './EduBackgroundItem'

const EduBackgroundList = () => {
    const dispatch = useDispatch()

    const edus = useSelector(selectAllEdus)
    console.log("All Edus = "+edus)
    const eduStatus = useSelector(getEdusStatus)
    console.log("Edu Status "+eduStatus)
    const error = useSelector(getEdusError)

    useEffect(()=>{
        if(eduStatus === 'idle'){
            dispatch(fetchEdus())
        }
    },[eduStatus,dispatch])

    let content;

    if(eduStatus === 'loading'){
        content = (<p>Loading.......</p>)
    }
    if(eduStatus === 'succeeded'){
        console.log()
        content = edus.map(
            (edu)=>(
               <EduBackgroundItem 
               id={edu.id}
               education={edu.education}
               degree={edu.degree}
               university={edu.university}
               startDate={edu.startDate}
               endDate={edu.endDate}
               />
            )
        )
    }
    if(eduStatus === 'failed'){
        content =(<p>{error}</p>)
    }

    return content
  
}

export default EduBackgroundList