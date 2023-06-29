import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addNewEdu } from './edubackgroundSlice'
import classes from './AddNewEdu.module.css'


const AddNewEdu = () => {

   
    const { applicantId } = useParams()
    console.log("Applicant Id in New Edu: "+applicantId)


    const [education, setEducation] = useState('')
    const [degree, setDegree] = useState('')
    const [university, setUniversity] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const onEduChange = e => setEducation(e.target.value)
    const onDegreeChange = e => setDegree(e.target.value)
    const onUniversityChange = e => setUniversity(e.target.value)
    const onStartDateChange = e => setStartDate(e.target.value)
    const onEndDateChange = e => setEndDate(e.target.value)

    const canSave = [education, degree, university, startDate, endDate].every(Boolean) && addRequestStatus === 'idle'

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = (event) => {
        event.preventDefault()
        if (canSave) {
            try {
                setAddRequestStatus('pending')

                dispatch(
                    addNewEdu({
                        // applicant:applicants,
  
                        edu:{
                            education,
                            degree,
                            university,
                            startDate,
                            endDate
    
                        },applicantId
                      
                       
                    })
                    
                    ).unwrap()

                    navigate(`/viewapp`)
            } catch (error) {
                console.log(error)
            } finally {
                setAddRequestStatus('idle')
            }

            setEducation('')
            
            setDegree('')
            setUniversity('')
            setStartDate('')
            setEndDate('')
        }
    }



    return (
        <div className={classes.formboldmainwrapper}>

            <div className={classes.formboldformwrapper}>
                <form method="POST" onSubmit={onSubmit}>
                    <div>
                        <h2>Education Background</h2>
                        <br />

                    </div>

                    <div className={classes.formboldmb3}>
                        <div>
                            <label for="education" className={classes.formboldformlabel}>
                                Education
                            </label>
                            <input
                                type="text"
                                name="edu"
                                placeholder="Your Education"
                                className={classes.formboldforminput}
                                value={education}
                                onChange={onEduChange}
                            />
                        </div>
                    </div>

                    <div className={classes.formboldmb3}>
                        <div>
                            <label for="degree" className={classes.formboldformlabel}>
                                Degree
                            </label>
                            <input
                                type="text"
                                name="degree"
                                placeholder="Your Degree"
                                className={classes.formboldforminput}
                                value={degree}
                                onChange={onDegreeChange}
                            />
                        </div>
                    </div>

                    <div className={classes.formboldmb3}>
                        <div>
                            <label for="university" className={classes.formboldformlabel}>
                                University
                            </label>
                            <input
                                type="text"
                                name="university"
                                placeholder="Your University"
                                className={classes.formboldforminput}
                                value={university}
                                onChange={onUniversityChange}
                            />
                        </div>
                    </div>

                    <div className={classes.formboldmb3}>
                        <div>
                            <label for="startDate" className={classes.formboldformlabel}> Start Date </label>
                            <input
                                type="date"
                                name="startDate"
                                placeholder="Start Date"
                                className={classes.formboldforminput}
                                value={startDate}
                                onChange={onStartDateChange}
                            />
                        </div>
                    </div>
                    <div className={classes.formboldmb3}>
                        <div>
                            <label for="endDate" className={classes.formboldformlabel}> End Date </label>
                            <input
                                type="date"
                                name="endDate"
                                placeholder="End Date"
                                className={classes.formboldforminput}
                                value={endDate}
                                onChange={onEndDateChange}
                            />
                        </div>
                    </div>

                    <button type="submit" className={classes.formboldbtn} disabled={!canSave}>Register</button>
                </form>

            </div>
        </div>
    )
}

export default AddNewEdu