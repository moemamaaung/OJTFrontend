import React, { useEffect, useState } from 'react'

import classes from './Register.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom'
import { fetchPrograms, selectAllPrograms } from '../program/programSlices'
import { fetchAcademicyears } from '../academicyear/academicyearSlices'

const Register = () => {

  const [fullname, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [programId, setProgramId] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const onProgramIdChange = e => { setProgramId(e.target.value) }
  const onFullNameChange = e => { setFullName(e.target.value) }
  const onEmailChange = e => { setEmail(e.target.value) }
  const onPasswordChange = e => { setPassword(e.target.value) }

  const canSave = [fullname, email, password].every(Boolean) && addRequestStatus === 'idle'

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const programs = useSelector(selectAllPrograms)
  useEffect(() => {
      dispatch(fetchAcademicyears())
      dispatch(fetchPrograms())
      
    },[dispatch])

  const onSubmit = (event) => {
    event.preventDefault()

    if (canSave) {
      try {
        setAddRequestStatus('pending')
        dispatch(
          register({
            fullname,
            username: email,
            password,
            programId

          })
        ).unwrap()

        navigate(`/admin/userList`)
      } catch (error) {
        console.log(error)
      } finally {
        setAddRequestStatus('idle')
      }

      setFullName('')
      setEmail('')
      setPassword('')

    }
  }



  return (
    <section className={classes.login}>
      <div className={classes.loginBox}>
        <div className={classes.left}>

          <div className={classes.contact}>
            <form onSubmit={onSubmit}>

              <h3 className={classes.color}>Register</h3>

              <input type="text" placeholder="FULLNAME" value={fullname} onChange={onFullNameChange} />

              <div className={classes.inputGroup}>
                <div className={classes.inputBox}>
                  <select
                    className={classes.name}
                    value={programId}
                    onChange={onProgramIdChange} >
                    <option value="">Choose Program</option>
                    {programs.map((a) =>

                      <option key={a.id} value={a.id}>
                        {a.programName}
                      </option>

                    )};
                  </select>


                </div>
              </div>

              <input type="text" placeholder="USERNAME" value={email} onChange={onEmailChange} />


              <input type="text" placeholder="PASSWORD" value={password} onChange={onPasswordChange} />


              <button className={classes.submit} >LET'S GO</button>
            </form>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.rightText}>
          </div>

        </div>
      </div>
    </section>

  )
}

export default Register