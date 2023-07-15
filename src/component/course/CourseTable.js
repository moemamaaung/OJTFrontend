import CourseList from "./CourseList";
import AddCreateButton from "./AddCreateButton";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCourses } from "./courseSlice";
import classes from '../Abouts.module.css'
import $ from 'jquery'
import "bootstrap/dist/css/bootstrap.min.css";

import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { fetchPrograms } from "../program/programSlices";

const CourseTable = () => {
  const dispatch = useDispatch();
  $(document).ready(function () {
    setTimeout(function () {
      $("#example").DataTable();
    }, 1000);
  });

  useEffect(() => {
    dispatch(fetchCourses());
    dispatch(fetchPrograms())
  }, [dispatch]);

  return (
    <div className="container-fluid">
   
   <h1 class="m-0  font-weight-bold text-secondary text-center">Course List</h1>
        <br />
       
        <AddCreateButton />
    
        <div class="container mt-5">
        <table
          id="example"
          class="display table table-bordered table-hover table-striped"
        >
          <thead >
              <tr>
                <th>Code</th>
                <th>ProgramName</th>
                <th>Subject1</th>
                <th>Subject2</th>
                <th>Subject3</th>
                <th>Subject4</th>
                <th>Subject5</th>
                <th>Subject6</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <CourseList />
            </tbody>
          </table>
        </div>
      </div>
 
  );
};

export default CourseTable;
