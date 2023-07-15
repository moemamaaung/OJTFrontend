import MarkList from "./MarkList"
import AddCreateButton from "./AddCreateButton"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchMarks } from "./markSlice"
import classes from '../Abouts.module.css'
import { fecthExams } from "../exam/examSlice"
import { fetchUsers } from "../features/user/userSlice"
import $ from 'jquery'
import "bootstrap/dist/css/bootstrap.min.css";


import "datatables.net-dt/css/jquery.dataTables.min.css";

const MarkTable = () => {

  $(document).ready(function () {
    setTimeout(function () {
      $("#example").DataTable();
    }, 1000);
  });

  const text = `m-0  font-weight-bold   text-center ${classes.text}`
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fecthExams());
    dispatch(fetchMarks());
    dispatch(fetchUsers());

  }, [dispatch]);

  return (
  
<div className="MainDiv">
    <div class="text-center">
    <h3 className="m-0 font-weight-bold text-primary">Mark List</h3>
  </div>
  <AddCreateButton />
  <br />
  <br />
    <div className="container-fluid">
    <table id="example" class="display table table-bordered table-hover table-striped">
        <thead >
                  <tr>
                        
                       <th>ID</th>
                        <th> StudentName</th>
                        <th>ProgramName</th>
                        {/* <th>ExamType</th> */}
                        <th>Mark</th>
                        <th>Actions</th>
                       
                    </tr>
                </thead>
                <tbody>
                <MarkList />
                </tbody>
                </table>
    </div>

    </div>

  )
}

export default MarkTable