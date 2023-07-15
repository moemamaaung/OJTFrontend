import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import classes from '../mark/CreateMarkForm.module.css'
import { selectAcademicyearById, updateAcademicYear } from './academicyearSlices'

const UpdateAcademicYearForm = () => {
  const { academicyearId } = useParams( )
  const academicyears = useSelector((state)=>selectAcademicyearById(state,Number(academicyearId))) 
  console.log("ID "+academicyearId)
  console.log(academicyears)

  const [id,setId] = useState(academicyears?.id);
  const [value, setAcademicyear] = useState(academicyears?.value)
  const [addRequestStatus,setAddRequestStatus]= useState('idle')

  const onAcademicIdChange = e => setId(e.target.value)
  const onAcademicChange = e => setAcademicyear(e.target.value)

  const canSave = [id, value].every(Boolean) && addRequestStatus === 'idle'
 
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onSubmit = (event)=>{
      event.preventDefault();

       
         if(canSave){
          try {
              setAddRequestStatus('pending')
              console.log("In the can save")

              dispatch(
               
                  updateAcademicYear({
                      id,
                      value
                  }),
              )
          }
      
           catch (error) {
              console.log(error)
              
          }finally{
              setAddRequestStatus('idle')
          }

     
          setId('')
    setAcademicyear('')

      navigate(`/admin/academicyear`)
         }
         console.log(canSave)
      
      }
  return (
    <div className={classes.all}>
    <div className={classes.wrapper}>


        <h2>Update Academic Year Form</h2>
        <form onSubmit= { onSubmit }>
            <div className={classes.row}>

                <div className={classes.col}>

                    <div className={classes.col}>

                    <div className={classes.inputGroup}>
                                    <div className={classes.inputBox}>
                                        
                                        <input 
                                        type="text" 
                                        placeholder="Name" 
                                        required 
                                        className={classes.name} 
                                        value={value}
                                        onChange={onAcademicChange}
                                        />

                                    </div>
                                </div>

                    </div>

                    <div className={classes.inputGroup}>
                        <div className={classes.inputBox}>
                            <button type="submit" className={classes.btn}>Update</button>
                        </div>
                    </div>
                    
                    </div>

            </div>

        </form>
        

    </div>
</div>
  )
}

export default UpdateAcademicYearForm