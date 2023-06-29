import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addNewAcademicYear } from './academicyearSlices'
import classes from '../mark/CreateMarkForm.module.css'

const CreateAcademicYearForm = () => {

  const [value, setName] = useState('')

  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const onAcademicYearChange = e => setName(e.target.value)
 
 
  const canSave = [value].every(Boolean) && addRequestStatus === 'idle'

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onSubmit = (event)=>{
      event.preventDefault();

      if(canSave){
          try {
              setAddRequestStatus('pending')
     
          dispatch(
              addNewAcademicYear({
    
                    value
                

              }),
          
      );
  }
  catch (error) {
      console.log(error)
  }finally{
      setAddRequestStatus('idle')
  }
    
    setName('')

      navigate(`/admin/academicyear`)
}
  }
  return (
    <div className={classes.all}>
            <div className={classes.wrapper}>


                <h2>Create AcademicYear Form</h2>
                <form onSubmit={onSubmit}>
                    <div className={classes.row}>

                        <div className={classes.col}>

                            <div className={classes.col}>

                                <div className={classes.inputGroup}>
                                    <div className={classes.inputBox}>
                                        
                                        <input 
                                        type="text" 
                                        name='endDate'
                                        placeholder="Academic Year" 
                                        required 
                                        className={classes.name} 
                                        value={value}
                                        onChange={onAcademicYearChange}
                                        />

                                    </div>
                                </div>

                            </div>

                            <div className={classes.inputGroup}>
                                <div className={classes.inputBox}>
                                    <button type="submit" className={classes.btn}>Create</button>
                                </div>
                            </div>
                            
                            </div>

                    </div>

                </form>
                

            </div>
        </div>
  )
}

export default CreateAcademicYearForm