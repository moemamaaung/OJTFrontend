import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import ConfirmList from './ConfirmList';
import { fetchConfirmApplicants } from './confirmSlice';


//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";


const ConfirmTable = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchConfirmApplicants());
    }, [dispatch]);
  
    $(document).ready(function () {
      setTimeout(function () {
        $("#example").DataTable();
      }, 1000);
    });
  
    return (
    
      <div className="MainDiv">
        <div class="text-center">
          <h3 className="m-0 font-weight-bold text-primary">Confirm List</h3>
        </div>
        <div className="container">
         
          <br />
          <br />
          <table
            id="example"
            class="display table table-bordered table-hover table-striped"
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phno</th>
                <th>Gender</th>
                <th>Education</th>
                <th>Degree</th>
                <th>University</th>
              </tr>
            </thead>
            <tbody>
              <ConfirmList />
            </tbody>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phno</th>
                <th>Gender</th>
                <th>Education</th>
                <th>Degree</th>
                <th>University</th>
               
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
}

export default ConfirmTable