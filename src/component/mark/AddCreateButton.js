import { Link } from "react-router-dom"
import React from "react"
const AddCreateButton = () => {

 
  return (
    <React.Fragment>
      <Link to="/admin/createMark" className="btn btn-ms btn-primary">
        Create a Mark
      </Link>
    </React.Fragment>
  )
}

export default AddCreateButton