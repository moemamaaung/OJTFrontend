import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fecthExams } from "./examSlice"
import { Link } from "react-router-dom"
import ExamList from "./ExamList"
import classes from '../Abouts.module.css'
import AddExamButton from "./AddExamButton"
import $ from 'jquery'
import "bootstrap/dist/css/bootstrap.min.css";

import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
const ExamTable = () => {
  
  $(document).ready(function () {
    setTimeout(function () {
      $("#example").DataTable();
    }, 1000);
  });


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fecthExams())
    },[dispatch])

    return (
        <div className="container-fluid">
          <div className="card-body">
            <h1 className="m-0  font-weight-bold text-primary">Exam List</h1>
            <br />
            <br />
            {/* <Link to="/admin/createExam" >
            <button className={classes.color1}><i class="fas fa-plus fa-sm"></i>  Exam</button>
            </Link> */}<AddExamButton />
            <br />
            <div class="container mt-5">
            <table
          id="example"
          class="display table table-bordered table-hover table-striped"
        >
              <thead >
                  <tr>
                    <th>Id</th>
                    <th>Exam Type</th>
                    <th>Actions</th>
                  </tr>
                </thead>
    
                <tbody>
                  <ExamList />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
  
}

export default ExamTable