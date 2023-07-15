import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchApplicants,
  selectAllApplicants,
} from "../../applicant/applicantSlice";
import { fetchUsers, getUser } from "../features/user/userSlice";
import { fetchLecturers, getAllLecturers } from "../../lecturer/lecturerSlice";
import { fetchPrograms, selectAllPrograms } from "../program/programSlices";
import ProgramTable from "../program/ProgramTable";

const AdminCard = () => {
  const applicants = useSelector(selectAllApplicants);
  console.log("All Applicants in Card" + applicants);
  const applicantCount = Object.keys(applicants).length;
  console.log("All Applicant length in Card" + applicantCount);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPrograms());
    dispatch(fetchApplicants());
    dispatch(fetchUsers());
    dispatch(fetchLecturers());
  }, [dispatch]);
  const users = useSelector(getUser);
  const userCount = Object.keys(users).length;

  const lecturers = useSelector(getAllLecturers);
  const lecturerCount = Object.keys(lecturers).length;

  const programs = useSelector(selectAllPrograms);
  const programCount = Object.keys(programs).length;
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
       
      </div>

      <div class="row">
        <div class="col-xl-3 col-md-4 mb-4">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters">
                <div class="col ml-3">
                  <div class="text-xm font-weight-bold text-primary text-uppercase mb-1">
                    Users
                  </div>
                  <div class="h4 mb-0 font-weight-bold text-gray-800">
                    {userCount}
                  </div>
                </div>
                <div class="col ml-5">
                  <i class="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-4 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters">
                <div class="col ml-3">
                  <div class="text-xm font-weight-bold text-primary text-uppercase mb-1">
                    Applicants
                  </div>
                  <div class="h4 mb-0 font-weight-bold text-gray-800">
                    {applicantCount}
                  </div>
                </div>
                <div class="col ml-5">
                  <i class="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-md-4 mb-4">
          <div class="card border-left-info shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters">
                <div class="col ml-3">
                  <div class="text-xm font-weight-bold text-primary text-uppercase mb-1">
                    Lecturer
                  </div>
                  <div class="h4 mb-0 font-weight-bold text-gray-800">
                    {lecturerCount}
                  </div>
                </div>
                <div class="col ml-5">
                  <i class="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-md-4 mb-4">
          <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters">
                <div class="col ml-3">
                  <div class="text-xm font-weight-bold text-primary text-uppercase mb-1">
                    Programs
                  </div>
                  <div class="h4 mb-0 font-weight-bold text-gray-800">
                    {programCount}
                  </div>
                </div>
                <div class="col ml-5">
                  <i class="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div class="row">
        <div class="col-xl-12 col-lg-10">
          <div class="card shadow mb-4">
            <ProgramTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
