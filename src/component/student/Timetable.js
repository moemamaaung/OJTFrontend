import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectProgramById, selectTimeById } from '../time/timeSlice'
import { fetchPrograms, selectAllPrograms } from '../program/programSlices'
import TimeList from '../time/TimeList'
import TimetableList from './TimetableList'

const Timetable = (props) => {


  return (
    
    <div >
    <TimetableList />
   
    
    </div>
  )
}

export default Timetable