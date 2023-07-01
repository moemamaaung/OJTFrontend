import { Link, Outlet } from "react-router-dom"
import { useState } from "react"
import classes from '../Abouts.module.css'
import Profile from "../profile/Profile"
import { useDispatch, useSelector } from "react-redux"
import { getToken, logout } from "../features/auth/authSlice"

const Home = () => {
    const icon = `fas fa-fw fa-cog`
    const color = `navbar-nav sidebar  accordion ${classes.color}`


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
    
    // else {
    //     adminAccountItem = (
    //         <Link to="/login" className="text-light">
    //             Log in
    //         </Link>
    //     );
    // }



    return (
        <div id="wrapper">


            <ul className={color} id="accordionSidebar">


                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">

                    <div><h3 class="sidebar-brand-text mx-3"><i class="fas fa-university fa-lg me-2"></i>HMI</h3></div>
                </a>

                <li class="nav-item">
                    <a class="nav-link text-light collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i class="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </a>
                    <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Login Screens:</h6>
                            {/* <Link to='/login' class="collapse-item">Login</Link> */}
                            <Link to='/admin/register' class="collapse-item" >Register</Link>
                            <Link to='/'
                            
                            class="collapse-item"
                                onClick={() => {
                                    dispatch(logout());
                                }}
                            >
                                Log out
                            </Link>
                            <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
                            <div class="collapse-divider"></div>
                            <h6 class="collapse-header">Other Pages:</h6>
                            <a class="collapse-item" href="404.html">404 Page</a>
                            <a class="collapse-item" href="blank.html">Blank Page</a>
                        </div>
                    </div>
                </li>


                <li class="nav-item">
                    <a class="nav-link text-light" href="charts.html">
                        <i class="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></a>
                </li>


                <li class="nav-item">
                    <a class="nav-link collapsed text-light" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">
                        <i class="fas fa-fw fa-table"></i>
                        <span>Tables</span>
                    </a>

                    <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Custom Tables:</h6>

                            <Link to="/admin/all" className="collapse-item" >Applicants</Link>
                            <Link to="/admin/alledu" className="collapse-item" >Education</Link>
                            <Link to="/admin/allexp" className="collapse-item" >Experience</Link>
                            <Link to="/admin/academicyear" className="collapse-item" >AcademicYears</Link>
                            <Link to="/admin/program" className="collapse-item" >Programs</Link>
                            <Link to="/admin/userList" className="collapse-item" >Students</Link>
                            <Link to="/admin/confirm" className="collapse-item" >ConfirmList</Link>
                            <Link to="/admin/courseTable" className="collapse-item" >Courses</Link>
                            <Link to="/admin/examTable" className="collapse-item" >Exams</Link>
                            <Link to="/admin/markTable" className="collapse-item" >Marks</Link>
                            <Link to="/admin/timetable" className="collapse-item" >Times</Link>
                            <Link to="/admin/confirm" className="collapse-item" >ConfirmTable</Link>
                           
                           

                        </div>
                    </div>

                </li>

            </ul>

            <div id="content-wrapper" class="d-flex flex-column">

                <div id="content">

                    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


                        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                            <i class="fa fa-bars"></i>
                        </button>


                        <form
                            class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                            <div class="input-group">
                                <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                                    aria-label="Search" aria-describedby="basic-addon2" />
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="button">
                                        <i class="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </form>


                        <ul class="navbar-nav ml-auto">

                            <li class="nav-item dropdown no-arrow d-sm-none">
                                <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-search fa-fw"></i>
                                </a>


                                <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                    aria-labelledby="searchDropdown">
                                    <form class="form-inline mr-auto w-100 navbar-search">
                                        <div class="input-group">
                                            <input type="text" class="form-control bg-light border-0 small"
                                                placeholder="Search for..." aria-label="Search"
                                                aria-describedby="basic-addon2" />
                                            <div class="input-group-append" >
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
    )
}

export default Home