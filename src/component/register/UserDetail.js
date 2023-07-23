import React from 'react'
import { selectUserById } from '../features/user/userSlice';
import { useSelector } from 'react-redux';
import classes from './UserDetail.module.css'
import {  Link, useParams } from 'react-router-dom';

const UserDetail = () => {

    const { userId } = useParams();
    console.log(userId);
    const user = useSelector((state) =>
      selectUserById(state, Number(userId))
    );
  return (
 
    <div className={classes.all}>

    <div className={classes.wrapper}>
      <h2>{user.fullname}</h2>
      <div className={classes.row}>
        <div className={classes.col}>
          <div className={classes.col}>
          <div className={classes.inputGroup}>
              Phno : {user.phno}
            </div>
            <div className={classes.inputGroup}>
              Gender :  {user.gender}
            </div>
            <div className={classes.inputGroup}>
              Street : {user.street}
            </div>
            <div className={classes.inputGroup}>
             Township : {user.township}
            </div>

            <div className={classes.inputGroup}>
              <div className={classes.inputBox}>
               City:{user.city}
              </div>
            </div>

           

  
          </div>

          <div className={classes.inputGroup}>
            <div className={classes.inputBox}>
              <button type="submit" className={classes.btn}>
                <Link to="/admin/user" style={{ textDecoration: "none" }}>
                  Back
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserDetail