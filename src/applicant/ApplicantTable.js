import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchApplicants } from "./applicantSlice";
import ApplicantList from "./ApplicantList";
import classes from "../applicant/AddNewApplicantForm.module.css";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
const ApplicantTable = () => {
  const text = `m-0 font-weight-bold text-secondary text-center ${classes.text}`;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApplicants());
  }, [dispatch]);

  $(document).ready(function () {
    setTimeout(function () {
      $("#example").DataTable();
    }, 1000);
  });

  return (

    <div className="MainDiv">
      <div class="text-center">
        <h1 className={text}> Applicant List</h1>
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
              <th>ProgramName</th>
              <th>Detail</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <ApplicantList />
          </tbody>
          <tfoot>
            <tr>
            <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phno</th>
              <th>Gender</th>
              <th>ProgramName</th>
              <th>Detail</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ApplicantTable;
