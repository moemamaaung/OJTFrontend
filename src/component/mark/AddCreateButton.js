import { Link } from "react-router-dom"
import React from "react"
import classes from '../academicyear/Add.module.css'
const AddCreateButton = () => {
  const color1 = ` ms-3 ${classes.color1}`
 
  return (
    <React.Fragment>
    <Link to='/admin/createMark' >
    <button className={color1}><i class="fas fa-plus fa-sm"></i>  Create Mark</button>
   </Link>
   </React.Fragment>
  )
}

export default AddCreateButton