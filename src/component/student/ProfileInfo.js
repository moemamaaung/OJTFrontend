import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate, useParams } from 'react-router-dom';
import { selectApplicantById } from '../../applicant/applicantSlice';
import classes from '../login/Login.module.css'


const ProfileInfo = () => {
    const p = `container emp-profile bg-light mt-5  ${classes.p}`

    const loginUser  = useSelector( state => state.auths.user);
  
   console.log("Log in user: "+loginUser)
   const userId = loginUser.id
   console.log("In the user profile Form id is :"+userId);

   const user = loginUser;
  

   const [id,setId] = useState(user.id) 
   const [fullname,setFullname] = useState(user.fullname)
   const  [username,setUsername] =useState(user.username)
  
   
   const [updateRequestStatus, setUpdatRequestStatus] = useState('idle')

    
   const onNameChange = (e) => setFullname(e.target.value)
   const onEmailChange = (e) => setUsername(e.target.value)

   const canSave = [id, fullname,username].every(Boolean) && updateRequestStatus === 'idle'
 
   const dispatch = useDispatch();
   const navigate = useNavigate()
 
   const onSubmit = (event)=>{
       event.preventDefault();
 
        
          if(canSave){
           try {
            setUpdatRequestStatus('pending')
               console.log("In the can save")
 
               dispatch(
                
                  
               )
           }
       
            catch (error) {
               console.log(error)
               
           }finally{
               setUpdatRequestStatus('idle')
           }
 
      
 
          }
          console.log(canSave)
       
       }

  return (

   

    <div className={p}>
   
    <form onSubmit={onSubmit} className=''>
        <div className="row">
            
            <div className="col-md-6">
                <div className="profile-head">
                            <h5>
                                Kshiti Ghelani
                            </h5>
                            <h6>
                                Web Developer and Designer
                            </h6>
                            <p className="proile-rating text-black">RANKINGS : <span>8/10</span></p>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <div className="col-md-2">
                <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
            </div> */}
        </div>
        <div className="row">
           
            <div className="col-md-8">
                <div className="tab-content profile-tab" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>User Id</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p className='text-black'>Kshiti123</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        {/* <p className='text-black'>Kshiti Ghelani</p> */}
                                        <input type='text' value={fullname} onChange={onNameChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Email</label>
                                    </div>
                                    <div className="col-md-6">
                                        {/* <p className='text-black'>kshitighelani@gmail.com</p> */}
                                        <input type='text' value={username} onChange={onEmailChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Phone</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p className='text-black'>123 456 7890</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Profession</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p className='text-black'>Web Developer and Designer</p>
                                    </div>
                                </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Experience</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Expert</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Hourly Rate</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p className='text-black'>10$/hr</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Total Projects</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p className='text-black'>230</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>English Level</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p className='text-black'>Expert</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Availability</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p className='text-black'>6 months</p>
                                    </div>
                                </div>
                        <div className="row">
                            <div className="col-md-12">
                                <label>Your Bio</label><br/>
                                <p className='text-black'>Your detail description</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>           
</div>
  )
}

export default ProfileInfo