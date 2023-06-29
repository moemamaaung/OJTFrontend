import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useEffect } from 'react'

import { fetchTime, selectAllTimes } from './timeSlice'
import AddTimeButton from './AddTimeButton'
import TimeList from './TimeList'


const Time = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchTime())
    },[dispatch])
    
    return (
      <div >      
  
      <h1 class="m-0  font-weight-bold text-secondary text-center">Timetable List</h1>
    
     <AddTimeButton />

     
     <div class="container mt-5">
   <TimeList/>
   </div>
    
        </div>
  
  
    )
}

export default Time

