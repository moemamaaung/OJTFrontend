

import BackDrop from "../../utility/BackDrop";
import ConfirmModal from "../../utility/ConfirmModal";
import classes from './Course.module.css'

const CourseItem = (props) => {
const tip = `text-center text-info ${classes.tip}`


  return (
<div>
<h1 className='text-center mb-5 text-info mt-3'>Subjects</h1>

    <div className={classes.card}>
    <div className={classes.card1}>
    
        <h3 className={classes.secondText}>{props.subject1}</h3>
    </div>
    <div className={classes.card2}>
        <h3 className={classes.tip}>{props.subject2}</h3>
       
    </div>
    <div className={classes.card3}>
    <p className={classes.tip}>{props.subject3}</p>
     
    </div>
    </div>
    <div className={classes.card}>
    <div className={classes.card1}>
    <p className={classes.tip}>{props.subject4}</p>
      
    </div>
    <div className={classes.card2}>
        <p className={classes.tip}>{props.subject5}</p>
       
    </div>
    <div className={classes.card3}>
    <p className={classes.tip}>{props.subject6}</p>
       
    </div>
</div>
</div>
  
  );
};

export default CourseItem;
