import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchApplicants } from './applicantSlice'
import ApplicantList from './ApplicantList'
import classes from '../applicant/AddNewApplicantForm.module.css'

const ApplicantTable = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchApplicants())
  }, [dispatch])

  return (

    <div className="container-fluid">
      <div className="card-body">
        <h1 className="m-0  font-weight-bold text-primary">Applicant List</h1>
        <br />
        <br />
        
        <div class="container mt-5">
       <table class="table table-striped table-bordered mt-5">
    <thead className={classes.color1}>
              <tr>
              <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phno</th>
                <th>Gender</th>
                <th>Education</th>
                <th>Degree</th>
                <th>University</th>
                <th>Detail</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <ApplicantList />
            </tbody>
          </table>
        </div>
      </div>
    </div>



  )
}

export default ApplicantTable