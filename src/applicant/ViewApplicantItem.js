import React from 'react'
import classes from './ViewApplicantItem.module.css'
import { Link } from 'react-router-dom'


const ViewApplicantItem = (props) => {
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
                      value={props.name}
                    />
                  </div>
                </div>
                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <input
                      type="email"
                      name='email'
                      className={classes.name}
                      value={props.email}
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
                 
                    <button  className={classes.btn}>
                    <Link to={`/newedu/${Number(props.id)}`}>Add Education</Link>                      
                    </button>
                   
                    
                </div>
              </div>
              <div className={classes.inputGroup}>
                <div className={classes.inputBox}>
              <button  className={classes.btn}>
                    <Link to={`/newexp/${Number(props.id)}`}>Add Experience</Link>                      
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