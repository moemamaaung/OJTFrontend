import { Link, Outlet } from "react-router-dom"
import classes from '../student/Navbar.module.css'
import logo from '../../images/screen1.png'
import Profile from "../profile/Profile"
import { getUserByFullname } from "../features/auth/authSlice"
import { useSelector } from "react-redux"

const Navbar = () => {

  const login = `btn btn text-light me-3  ${classes.login}`
  const navbg = `navbar navbar-expand-lg navbar-light    ${classes.navbg}`
  const text = `nav-link text-light me-4 ${classes.text}`
  const text1 = `nav-link active  dropdown-toggle text-light me-5 ${classes.text1}`
  const menu1 = `navbar-nav ml-auto ${classes.menu1}`
  const drop = `dropdown-menu ${classes.show}`

  const loginUser = useSelector(state => state.auths.user);
  console.log(loginUser)

  const fullName = loginUser.fullname
console.log(fullName)

  return (

    <header class="top-navbar">
      <nav class={navbg}>
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">
            <img src={logo} alt="" />
          </a>
          <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="main_nav">
            <ul class={menu1}>
              <li class="nav-item"><Link to='/student/timetable' class={text} >Timetable</Link></li>
              <li class="nav-item"><Link to='/student' class={text} >Profile</Link></li>

              <li class="nav-item"><Link to='/student/course' class={text} >Subject</Link></li>
              <li class="nav-item"><Link to='/student/mark' class={text} >Mark</Link></li>

              <li class="nav-item dropdown">
                <a className={text1} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{fullName}
                </a>
                <ul className={drop}>
                  <li><Link to='/' className="dropdown-item " href="#">Logout</Link></li>

                </ul>
              </li>
             
             

            </ul>

          </div>
          
        </div>
      </nav>

      <Outlet />
    </header>
   
  )
}

export default Navbar

