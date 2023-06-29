import React from "react"
import { Link } from "react-router-dom"
import classes from '../academicyear/Add.module.css'

const AddProgramButton = () => {
  const color1 = ` ms-3 ${classes.color1}`

  return (


    <React.Fragment>
         <Link to='/admin/program-create' >
         <button className={color1}><i class="fas fa-plus fa-sm"></i> Create Program</button>
        </Link>
        </React.Fragment>
  )
}

export default AddProgramButton