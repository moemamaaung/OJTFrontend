import React from 'react'
import classes from '../component/academicyear/Add.module.css'
import { Link } from 'react-router-dom'

const AddLecturerButton = () => {
    const color1 = ` ms-3 ${classes.color1}`

  return (
    <React.Fragment>
    <Link to='/admin/createLecturer' >
    <button className={color1}><i class="fas fa-plus fa-sm"></i> Create Lecturer</button>
   </Link>
   </React.Fragment>
  )
}

export default AddLecturerButton