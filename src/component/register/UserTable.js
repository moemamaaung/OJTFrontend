import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchUsers } from "../features/user/userSlice";
import UserList from "./UserList";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";

import "datatables.net-dt/css/jquery.dataTables.min.css";

const UserTable = () => {
  $(document).ready(function () {
    setTimeout(function () {
      $("#example").DataTable();
    }, 1000);
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="MainDiv">
      <div class="text-center">
        <h1 class="m-0  font-weight-bold text-secondary text-center">
          User List
        </h1>
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
              <th>FullName</th>
              <th>Email</th>
              <th>ProgramName</th>
              <th>Detail</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <UserList />
          </tbody>
          <tfoot>
            <tr>
              <th>ID</th>
              <th>FullName</th>
              <th>Email</th>
              <th>ProgramName</th>
              <th>Detail</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
