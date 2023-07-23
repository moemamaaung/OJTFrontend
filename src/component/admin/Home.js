import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import classes from "../Abouts.module.css";
import Profile from "../profile/Profile";
import { useDispatch, useSelector } from "react-redux";
import { getToken, logout } from "../features/auth/authSlice";

const Home = () => {
  const color = `navbar-nav sidebar  accordion ${classes.color}`;

  const token = useSelector(getToken);

  const dispatch = useDispatch();
  let adminAccountItem = "";

  if (token) {
    adminAccountItem = (
      <Link
        to="/"
        className="text-light"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Log out
      </Link>
    );
  }

  return (
    <div id="wrapper">
      <ul className={color} id="accordionSidebar">
        <p class="sidebar-brand d-flex align-items-center justify-content-center">
          <div>
            <h3 class="sidebar-brand-text mx-3">
              <i class="fas fa-university fa-lg me-2"></i>HMI
            </h3>
          </div>
        </p>

        <li class="nav-item">
          <a
            class="nav-link text-light collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i class="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </a>
          <div
            id="collapsePages"
            class="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Login Screens:</h6>
{/* 
              <Link to="/admin/register" class="collapse-item">
                Register
              </Link> */}
              <Link
                to="/"
                class="collapse-item"
                onClick={() => {
                  dispatch(logout());
                }}
              >
                Log out
              </Link>
            </div>
          </div>
        </li>

        <li class="nav-item">
          <a
            class="nav-link collapsed text-light"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i class="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </a>

          <div
            id="collapseUtilities"
            class="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Custom Tables:</h6>
              <Link to="/admin" className="collapse-item">
                Home
              </Link>
              <Link to="/admin/all" className="collapse-item">
                Applicants
              </Link>
              <Link to="/admin/academicyear" className="collapse-item">
                AcademicYears
              </Link>
              <Link to="/admin/program" className="collapse-item">
                Programs
              </Link>
              <Link to="/admin/user" className="collapse-item">
                Students
              </Link>
              <Link to="/admin/courseTable" className="collapse-item">
                Courses
              </Link>
              {/* <Link to="/admin/examTable" className="collapse-item">
                Exams
              </Link> */}
              <Link to="/admin/markTable" className="collapse-item">
                Marks
              </Link>
              <Link to="/admin/timetable" className="collapse-item">
                Times
              </Link>
              <Link to="/admin/lecturerTable" className="collapse-item">
                Lecturers
              </Link>
            </div>
          </div>
        </li>
      </ul>

      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <nav class="navbar navbar-expand navbar-light topbar mt-0 mb-4 static-top shadow">
           
            <ul class="navbar-nav ml-auto">
              <li class="nav-item dropdown no-arrow d-sm-none">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="searchDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-search fa-fw"></i>
                </a>

                <div
                  class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                  aria-labelledby="searchDropdown"
                >
                  <form class="form-inline mr-auto w-100 navbar-search">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control bg-light border-0 small"
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                      <div class="input-group-append">
                        <button class="btn btn-primary" type="button">
                          <i class="fas fa-search fa-sm"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
