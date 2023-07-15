import { Link, Outlet } from "react-router-dom"
import classes from '../student/Navbar.module.css'
import logo from '../../images/screen1.png'
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../features/auth/authSlice"

const Navbar = () => {

  const navbg = `navbar navbar-expand-lg navbar-light    ${classes.navbg}`
  const text = `nav-link text-light me-4 ${classes.text}`
  const text1 = `nav-link active  dropdown-toggle text-light me-5 ${classes.text1}`
  const menu1 = `navbar-nav ml-auto ${classes.menu1}`
  const drop = `dropdown-menu ${classes.show}`

  const loginUser = useSelector(state => state.auths.user);
  console.log(loginUser)

  const fullName = loginUser.fullname
  console.log(fullName)

  const dispatch = useDispatch()

  return (

    <header class="top-navbar">
      <nav class={navbg}>
        <div class="container-fluid">
          <p class="navbar-brand" href="index.html">
            <img src={logo} alt="" />
          </p>
          <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="main_nav">
            <ul class={menu1}>
            <li class="nav-item"><Link to='/student' class={text} >Home</Link></li>
              <li class="nav-item dropdown">
                <p className={text1}  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{fullName}
                </p>
                <ul className={drop}>
                 <li> <Link to='/'  className="dropdown-item " 
                onClick={() => {dispatch(logout());}}>Log out</Link>
                </li>

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

