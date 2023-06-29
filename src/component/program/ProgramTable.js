import ProgramList from "./ProgramList"
import AddProgramButton from "./AddProgramButton"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchPrograms } from "./programSlices"
import classes from '../Abouts.module.css'
import $ from 'jquery'
import "bootstrap/dist/css/bootstrap.min.css";

import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

const ProgramTable = () => {
  
  $(document).ready(function () {
    setTimeout(function () {
      $("#example").DataTable();
    }, 1000);
  });

  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(fetchPrograms())
  },[dispatch])

  return (
    <div className="container-fluid">      

    <h1 class="m-0  font-weight-bold text-secondary text-center">Program List</h1>
   
   <AddProgramButton />

     <div class="container mt-3">
       {/* <table class="table table-striped table-bordered mt-4"> */}
       <table
          id="example"
          class="display table table-bordered table-hover table-striped"
        >
    {/* <thead className={classes.color1}> */}
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
    </table>
  </div>

</div>
  )
}

export default ProgramTable