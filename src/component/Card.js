
import classes from './Card.module.css'
import img1 from '../images/team-1.jpg'
import img2 from '../images/team-2.jpg'
import img3 from '../images/team-3.jpg'
import Abouts from './Abouts'
import ProgramFee from './ProgramFee'
import TeacherListCard from '../teacher/TeacherListCard'
import Contact from './Contact'
import History from './history/History'
import Footer from './footer/Footer'
import Report from './report/Report'

const Card = () => {

  const btn1 =`btn btn-primary py-md-2 px-md-4 font-weight-semi-bold   ${classes.btn1}`
  const top = `carousel-caption  ${classes.top}`
  const home =`container-fluid ${classes.home}`

  const font2 = `display-3  animated slideInDown  text-outline-light  mb-4 ${classes.font2}`
  const font4 = `  text-outline-light mb-4 ${classes.font4}`
   
    const margin = `container  ${classes.margin}`

  return (
      <div className={home}>
 
    
    <div className={top}>
    <h2 className={font4}>"For your better carrier and brighter future"</h2>
    <h1 className={font2}>2 Year Certificate Program</h1>
    <a href="" className={btn1}>Register Now</a>
   
    </div>
   
    <div className={margin}>
   
      <div className="row"> 
          <div className="col-md-4">
          <img src={img1}  alt="..." />
          </div>
        
          <div className="col-md-4">
            <img src={img2}  alt="..." />
          </div>
        
          <div className="col-md-4">
          <img src={img3}  alt="..." />
          </div>
        
      </div>
    </div>
    <br/>
    
    {/* <Abouts /> */}
    <br/>
    <Report />
    
   
    <br/>
    <History />
   
    
    {/* <TeacherListCard />*/}
     <Contact />
     <Footer /> 
   
   
  </div>
 


  

   
  
  )
}

export default Card