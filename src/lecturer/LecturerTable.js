import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LecturerList from "./LecturerList";
import { fetchLecturers } from "./lecturerSlice";

//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import AddLecturerButton from "./AddLecturerButton";
import classes from '../component/Abouts.module.css'

const LecturerTable = () => {
  const text = `m-0  font-weight-bold text-secondary text-center ${classes.text}`
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLecturers());
  }, [dispatch]);

  $(document).ready(function () {
    setTimeout(function () {
      $("#example").DataTable();
    }, 1000);
  });

  return (
    <div className="MainDiv">
      <div class="text-center">
        <h1 className={text}>Lecturer List</h1>
      </div>
      <AddLecturerButton />
      <div className="container">
        <br />
        <br />
        <table
          id="example"
          class="display table table-bordered table-hover table-striped"
        >
          <thead>
            <tr>
              <th>Id</th>
              <th>Profile</th>
              <th>Lecturer Name</th>
              <th>Email</th>
              <th>PhoneNo</th>
              <th>Address</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Qualify</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <LecturerList />
          </tbody>
          <tfoot>
            <tr>
              <th>Id</th>
              <th>Profile</th>
              <th>Lecturer Name</th>
              <th>Email</th>
              <th>PhoneNo</th>
              <th>Address</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Qualify</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default LecturerTable;
