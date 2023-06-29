import { Link, Outlet } from "react-router-dom"
import classes from './MainNavigation.module.css'
import logo from '../images/screen1.png'

const MainNavigation = () => {

  const login = `btn btn text-light me-3  ${classes.login}`
  const navbg = `navbar navbar-expand-lg navbar-light    ${classes.navbg}`
  const text = `nav-link text-light me-4 ${classes.text}`
  const text1 = `nav-link active font-weight-semi-bold dropdown-toggle text-light me-4 ${classes.text1}`
  const menu1 = `navbar-nav ml-auto ${classes.menu1}`

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
						<li class="nav-item active"><Link to='/' class={text}>Home</Link></li>
						<li class="nav-item"><Link to='/about' class={text} >AboutUs</Link></li>
					  <li class="nav-item"><Link to='/teacher' class={text} >Teachers</Link></li>
						<li class="nav-item"><Link to='/program-fee'  class={text} >Program</Link></li>
						<li class="nav-item"><Link to='/contact' class={text}>Contact</Link></li>
					<Link to='/login' className={login} type="button">Login</Link>
					</ul>
         
          </div>
         
			</div>
     
		</nav>
    <Outlet />
	</header>
  )
}

export default MainNavigation

