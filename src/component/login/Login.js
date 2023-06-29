import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { getRoles, getSuccess, login } from '../features/auth/authSlice'
import { useState } from 'react'
import classes from '../login/Login.module.css'

const Login = () => {
    const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [loginRequestStatus,setLoginRequestStatus] = useState('idle')
  const [message,setMessage] = useState('')

  useEffect(()=>{
    setMessage('')
  },[email,password])

  const onEmailChange = e => {setEmail(e.target.value)}
  const onPasswordChange = e => {setPassword(e.target.value)}

  const canLogin = [email,password].every(Boolean) && loginRequestStatus === 'idle'
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || "/"

  const success = useSelector(getSuccess)
  const roleType = useSelector(getRoles)
  console.log("RoleType:" + roleType)

  const onLogin = (e) => {
    e.preventDefault()
    
    if(canLogin){
      setLoginRequestStatus('pending')

      try {
          dispatch(login({
            username:email,
            password
          })).unwrap()
          
          if (success) {
            setEmail('')
            setPassword('')
            
            if (roleType == 'ROLE_ADMIN') {
  
              navigate("/admin", { replace: true })
            }
          
            else {
              navigate("/student", { replace: true })
            }
             
          }else{
            setMessage(<span className="alert-danger">username or password is incorrect</span>)
          }
      } catch (error) {
        console.error(error)
      } finally {
        setLoginRequestStatus('idle')
      }
    }
  }

  return (
    <div className={classes.m}>
    <form className={classes.form}>
    <div className={classes.header}>Sign in</div>
    <div className={classes.inputs}>
      <input placeholder="Email" className={classes.input} value={email} onChange={onEmailChange} type="text" />
      <input placeholder="Password" className={classes.input} value={password} onChange={onPasswordChange} type="password" />
      <div className={classes.checkboxcontainer}>
        <label className={classes.checkbox}>
          <input type="checkbox" id="checkbox" />
        </label>
        <label for="checkbox" className={classes.checkboxtext}>Remember me</label>
      </div>
      <button className={classes.siginbtn} onClick={onLogin}>Submit</button>
      
     
    </div>
  </form >
  </div>



  )
}

export default Login