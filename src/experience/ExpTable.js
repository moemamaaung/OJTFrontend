import React from 'react'
import ExpList from './ExpList'

const ExpTable = () => {
  return (
    <div className="container-fluid">
      <div className="card-body">
        <h1 className="m-0  font-weight-bold text-primary">Experience List</h1>
        <br />
        <br />
        
       
          <table className="table table-bordered" id="dataTable" width="100%">
            <thead>
              <tr>
              <th>ID</th>
                <th>Position</th>
                <th>Company</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Action</th>
                
              </tr>
            </thead>

            <tbody>
              <ExpList />
            </tbody>
          </table>
        
      </div>
    </div>
  )
}

export default ExpTable