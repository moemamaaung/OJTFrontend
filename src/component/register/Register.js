import React, { useEffect, useState } from 'react'

import classes from './Register.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../features/user/userSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchPrograms, selectAllPrograms } from '../program/programSlices'
import { fetchAcademicyears } from '../academicyear/academicyearSlices'
import { selectApplicantById } from '../../applicant/applicantSlice'

const Register = () => {

  const { confirmId } = useParams();
  const applicant = useSelector((state) =>
    selectApplicantById(state, Number(confirmId))
  );

  const [fullname, setFullName] = useState(applicant.fullname)
  const [email, setEmail] = useState(applicant.email)
  const [phno, setPhno] = useState(applicant?.phno);
  const [gender, setGender] = useState(applicant?.gender);
  const [street, setStreet] = useState(applicant?.street);
  const [township, settownShip] = useState(applicant?.township);
  const [city, setCity] = useState(applicant?.city);
  const [university, setUniversity] = useState(applicant?.edu.university);
  const [degree, setDegree] = useState(applicant?.edu.degree);
  const [position, setPosition] = useState(applicant?.exp.position);
  const [company, setCompany] = useState(applicant?.exp.company);
  const [password, setPassword] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')


  const onFullNameChange = e => { setFullName(e.target.value) }
  const onEmailChange = e => { setEmail(e.target.value) }
  const onPhnoChange = (e) => {
    setPhno(e.target.value);
  };
  const onGenderChange = (e) => {
    setGender(e.target.value);
  };
  const onStreetChange = (e) => {
    setStreet(e.target.value);
  };
  const onTownShipChange = (e) => {
    settownShip(e.target.value);
  };
  const onCityChange = (e) => {
    setCity(e.target.value);
  };

  const onPasswordChange = () => {
    const length = 10;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let result = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset.charAt(randomIndex);
    }

    setPassword(result);
  };

  const onUniversityChange = (e) => {
    setUniversity(e.target.value);
  }

  const onDegreeChange = (e) => {
    setDegree(e.target.value);
  }

  const onCompanyChange = (e) => {
    setCompany(e.target.value);
  }

  const onPositionChange = (e) => {
    setPosition(e.target.value);
  }

  const canSave = [fullname, email, phno, gender, street, township, city,university,degree, position,company, password].every(Boolean) && addRequestStatus === 'idle'

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const programs = useSelector(selectAllPrograms)
  useEffect(() => {
    dispatch(fetchAcademicyears())
    dispatch(fetchPrograms())

  }, [dispatch])

  const onSubmit = (event) => {
    event.preventDefault()

    if (canSave) {
      try {
        setAddRequestStatus('pending')
        dispatch(
          register({
            fullname,
            username: email,
            phno,
            gender,
            street,
            township,
            city,
            company,
            position,
            university,
            degree,
            password,
           

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
      
      setPhno("");
      setGender("");
      setStreet("");
      settownShip("");
      setCity("");
      setUniversity("");
      setDegree("");
      setCompany("");
      setPosition("");
      setPassword('')

    }
  }



  return (

    <section className={classes.formboldmainwrapper}>
        <div className={classes.formboldformwrapper}>
          <form className={classes.form} onSubmit={onSubmit}>
            <p className={classes.title}>Register</p>
            <p className={classes.message}>Signup now and get full access to our app. </p>
            <div className={classes.flex}>
          <label>
            <input type="text" value={fullname} onChange={onFullNameChange} className={classes.input} />
          </label>
          <label>
            <input type="text"  value={email} onChange={onEmailChange} className={classes.input} />
          </label>
        </div>               
        <label>
          <input type="text" value={phno} onChange={onPhnoChange} className={classes.input} />
        </label>
             
         <label>
          <input type="text" value={gender} onChange={onGenderChange} className={classes.input} />
        </label>
       
        <label>
              <input type="text" value={company} onChange={onCompanyChange} className={classes.input} />
        </label>
             
        <label>
          <input type="text" value={position} onChange={onPositionChange} className={classes.input} />
        </label>
            
  
            
        <label>
          <input type="text" value={street} onChange={onStreetChange} className={classes.input} />
        </label>
  
             
        <label>
          <input type="text" value={township} onChange={onTownShipChange} className={classes.input} />
        </label>
  
           
        <label>
          <input type="text" value={degree} onChange={onDegreeChange} className={classes.input} />
        </label>
             
        <label>
          <input type="text" value={university} onChange={onUniversityChange} className={classes.input} />
        </label>
  
           
        <label>
          <input type="text" value={city} onChange={onCityChange} className={classes.input} />
        </label>
         
        <label>
          <input type="text" value={password} onChange={onPasswordChange} className={classes.input} />
          <span>Password</span>
        </label>
                 
            <button type="submit" className="submit">Register</button>
          </form>
        </div>
      </section>


    // <section className={classes.login}>
    //   <div className={classes.loginBox}>
    //     <div className={classes.left}>

    //       <div className={classes.contact}>
    //         <form onSubmit={onSubmit}>

    //           <h3 className={classes.color}>Register</h3>

    //           <input type="text" placeholder="FULLNAME" value={fullname} onChange={onFullNameChange} />

            

    //           <input type="text" placeholder="USERNAME" value={email} onChange={onEmailChange} />


    //           <input type="text" placeholder="PASSWORD" value={password} onChange={onPasswordChange} />


    //           <button className={classes.submit} >LET'S GO</button>
    //         </form>
    //       </div>
    //     </div>
    //     <div className={classes.right}>
    //       <div className={classes.rightText}>
    //       </div>

    //     </div>
    //   </div>
    // </section>

  )
}

export default Register