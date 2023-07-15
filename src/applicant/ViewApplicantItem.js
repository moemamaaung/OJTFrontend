
import classes from './ViewApplicantItem.module.css'
import { Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getEduInApp, getExpInApp, setEdu, setExp } from './applicantSlice'




const ViewApplicantItem = (props) => {
  console.log(props)
  console.log("id"+props.id);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const edus = useSelector(getEduInApp)
  const exps = useSelector(getExpInApp)

  const applicantId = props.id
  console.log("jdhkfkdgjh"+applicantId)

  const addEduBtn =()=>{
    dispatch(setEdu(true))
    console.log("NewEdu id"+props.id)
    navigate(`/newedu`)
  }

  const addExpBtn = ()=>{
    dispatch(setExp(true))
    navigate(`/newexp`)
  }
  
  return (

    <div className={classes.all}>
      <div className={classes.wrapper}>


        <h2>View Applicant</h2>
        <form>
          <div className={classes.row}>
            <div className={classes.col}>
              <div className={classes.col}>
                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <input
                      type="text"
                      name='name'
                      className={classes.name}
                      value={props.fullname}
                    />
                  </div>
                </div>
                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <input
                      type="email"
                      name='email'
                      className={classes.name}
                      value={props.username}
                    />
                  </div>
                </div>
                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <input
                      type="text"
                      name='phno'
                      className={classes.name}
                      value={props.phno}
                    />
                  </div>
                </div>
                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <input
                      type="text"
                      name='name'
                      className={classes.name}
                      value={props.street}
                    />
                  </div>
                </div>
                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <input
                      type="text"
                      name='name'
                      className={classes.name}
                      value={props.township}
                    />
                  </div>
                </div>
                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <input
                      type="text"
                      name='name'
                      className={classes.name}
                      value={props.city}
                    />
                  </div>
                </div>
                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <input
                      type="text"
                      name='name'
                      className={classes.name}
                      value={props.gender}
                    />
                  </div>
                </div>

                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <input
                      type="text"
                      name='name'
                      className={classes.name}
                      value={props.program?.programName}
                    />
                  </div>
                </div>

                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                  
                  {!edus &&
                    <button  className={classes.btn}  onClick={addEduBtn}>
                    Add Education                   
                    </button>
                   } 
                  

                  </div>
                </div>

                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                   
                  {!exps &&
                      <button className={classes.btn} onClick={addExpBtn}> 
                     Add Experience
                      
                      </button>
                  }
                  </div>
                </div>
                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                  
                      <button className={classes.btn}> 
                      <Link to='/' style={{textDecoration:"none"}}> Done</Link>
                      
                      </button>
                  </div>
                </div>
               


              </div>

            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ViewApplicantItem