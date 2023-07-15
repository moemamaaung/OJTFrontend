import React from 'react'
import classes from './course/Course.module.css'
import logo from '../../images/student.jpg'
import { Link } from 'react-router-dom';
const StudentView = (props) => {
 

const tip = `text-center text-info mt-5 ${classes.tip}`


  return (
<div className="mt-5">
{/* <h1 className='text-center mb-5 text-info mt-3'>Subjects</h1> */}

    <div className={classes.card}>
    <div className={classes.card1}>
    
    <Link to='/student/timetable' style={{textDecoration : 'none'}}> <h3 className={classes.tip} >Timetable</h3></Link>
    </div>
   
   
   
    </div>
    <div className={classes.card}>
    <div className={classes.card2}>
    <Link to='/student/profile' style={{textDecoration : 'none'}}><h3 className={classes.tip} >Profile</h3></Link>
       
    </div>
    <div className={classes.card2}>
        <h3 className={classes.tip}><img src={logo} /></h3>
       
    </div>
    <div className={classes.card3}>
    <Link to='/student/course'  style={{textDecoration : 'none'}}> <h1 className={classes.tip} >Subjects</h1></Link>
     
    </div>
    </div>
    <div className={classes.card}>
    {/* <div className={classes.card1}>
    <p className={classes.tip}>{props.subject4}</p>
      
    </div>
    <div className={classes.card2}>
        <p className={classes.tip}>{props.subject5}</p>
       
    </div> */}
    <div className={classes.card4}>
    <Link to='/student/mark' style={{textDecoration : 'none'}} > <h1 className={classes.tip} >Mark</h1></Link>
       
    </div>
</div>
</div>
  
  );
};



export default StudentView