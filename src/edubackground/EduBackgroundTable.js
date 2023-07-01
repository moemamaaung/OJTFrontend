import React, { useEffect } from 'react'
import EduBackgroundList from './EduBackgroundList'
import { useDispatch } from 'react-redux'
import { fetchEdus } from './edubackgroundSlice'

const EduBackgroundTable = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(fetchEdus())
  },[dispatch])

  return (
    <div className="container-fluid">
      <div className="card-body">
        <h1 className="m-0  font-weight-bold text-primary">Education Background List</h1>
        <br />
        <br />
        
       
          <table className="table table-bordered" id="dataTable" width="100%">
            <thead>
              <tr>
              <th>ID</th>
                <th>Education</th>
                <th>Degree</th>
                <th>University</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Action</th>
                
              </tr>
            </thead>

            <tbody>
              <EduBackgroundList />
            </tbody>
          </table>
        
      </div>
    </div>
  )
}

export default EduBackgroundTable