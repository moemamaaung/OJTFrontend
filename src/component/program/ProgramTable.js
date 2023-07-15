import ProgramList from "./ProgramList";
import AddProgramButton from "./AddProgramButton";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPrograms } from "./programSlices";
import classes from "../Abouts.module.css";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";

import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { fetchAcademicyears } from "../academicyear/academicyearSlices";

const ProgramTable = () => {
  const text = `m-0 font-weight-bold text-secondary text-center ${classes.text}`;

  $(document).ready(function () {
    setTimeout(function () {
      $("#example").DataTable();
    }, 1000);
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAcademicyears());
    dispatch(fetchPrograms());
  }, [dispatch]);

  return (
   
    <div className="MainDiv">
      <div class="text-center">
        <h1 className={text}> Program List</h1>
      </div>
      <AddProgramButton />
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
              <th>ProgramName</th>
              <th>ProgramFee</th>
              <th>AcademicYear</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <ProgramList />
          </tbody>
          <tfoot>
            <tr>
              <th>ID</th>
              <th>ProgramName</th>
              <th>ProgramFee</th>
              <th>AcademicYear</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ProgramTable;
