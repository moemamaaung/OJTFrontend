import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchExps, getExpError, getExpStatus, selectAllExps } from './experienceSlice'

import ExpItem from './ExpItem'

const ExpList = () => {

    const dispatch = useDispatch()

    const exps = useSelector(selectAllExps)
    console.log(exps)
    const expStatus = useSelector(getExpStatus)
    console.log(expStatus)
    const error = useSelector(getExpError)

    useEffect(()=>{
      
            dispatch(fetchExps())
       
    },[dispatch])

    let content;

    if(expStatus === 'loading'){
        content = (<p>Loading .....</p>)
    }
    if(expStatus === 'succeeded'){
        content = exps.map(
            (exp) => (
                <ExpItem 
                id={exp.id}
                position={exp.position}
                company={exp.company}
                startDate={exp.startDate}
                endDate={exp.endDate}
                />
            )
        )
    }
    if(expStatus === 'failed'){
        content = (<p>{error}</p>)
    }
  return content
}

export default ExpList