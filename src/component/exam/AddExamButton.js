import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../academicyear/Add.module.css'
const AddExamButton = () => {
  const color1 = ` ms-4 ${classes.color1}`
  return (
    <React.Fragment>
    <Link to="/admin/createExam">
    <button className={color1}><i class="fas fa-plus fa-sm"></i> Exam</button>
    </Link>
  </React.Fragment>
  )
}

export default AddExamButton