import { useSelector } from 'react-redux'
import classes from './ProgramFee.module.css'



const ProgramFee = (props) => {
  

  
  const btn = `btn mb-2 ${classes.btn}`
  
  return (
     <div className="col-md-4 col-sm-6 col-xs-12">
            <div className={classes.singleprice}>
              <div className={classes.dealtop}>
                <h3>{props.programName}</h3>
                <h4>${props.programFee}</h4>
              </div>
              <div className={classes.dealbottom}>
                <ul >
                  <li>3 times installment / year</li>
                  <li>Program fee covers tution &</li>
                  <li> Registration & text books fees</li>
                  <li>Not include ITPEC exam fees </li>
          
                </ul>
                <div className={classes.btnarea}>
                  <a href="/add">Join</a>
                </div>
              </div>
            </div>
          </div>


       
  )

}

export default ProgramFee