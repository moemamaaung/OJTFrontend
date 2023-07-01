
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import classes from '../Abouts.module.css'
import { fetchUsers } from "../features/user/userSlice"
import UserList from "./UserList"
import $ from 'jquery'
import "bootstrap/dist/css/bootstrap.min.css";

import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";


const UserTable = () => {
  const dispatch = useDispatch()
  
  $(document).ready(function () {
    setTimeout(function () {
      $("#example").DataTable();
    }, 1000);
  });

 

  useEffect(()=>{
      dispatch(fetchUsers())
  },[dispatch])

  return (
    <div>      

    <h1 class="m-0  font-weight-bold text-secondary text-center">Student List</h1>
   <br/>
   <br/>
  

   <div class="container mt-5">
        <table
          id="example"
          class="display table table-bordered table-hover table-striped"
        >
    <thead >
                  <tr>
                        
                       <th>ID</th>
                        
                        <th>FullName</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>ProgramName</th>
                        <th>Actions</th>
                       
                    </tr>
                </thead>
               
               <tbody>

                <UserList />

              </tbody>
    </table>
  </div>

</div>
  )
}

export default UserTable