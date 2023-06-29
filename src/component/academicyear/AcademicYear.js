import React, { useEffect } from 'react'
import AcademicyearList from './AcademicYearList'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchAcademicyears } from './academicyearSlices'
import AddAcademicyearButton from './AddAcademicyearButton'
import classes from '../Abouts.module.css'
import $ from 'jquery'
import "bootstrap/dist/css/bootstrap.min.css";

import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

const AcademicYear = () => {
  const text = `m-0  font-weight-bold   text-center ${classes.text}`
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(fetchAcademicyears())
  },[dispatch])

  $(document).ready(function () {
    setTimeout(function () {
      $("#example").DataTable();
    }, 1000);
  });

  
  return (
    <div className='container-fluid'>      
  
    <h1 className={text}>AcademicYear List</h1>
   <br/>
  
   <AddAcademicyearButton />

       <div class="container mt-5">
       <table
          id="example"
          class="display table table-bordered table-hover table-striped"
        >
    <thead >
                  <tr>
                        
                       <th>ID</th>
                        <th>Academic Year</th>
                        <th>Action</th>
                    </tr>
                </thead>
               
               <tbody>

                <AcademicyearList />

              </tbody>
            </table>
        </div>
    </div>

  )
}

export default AcademicYear