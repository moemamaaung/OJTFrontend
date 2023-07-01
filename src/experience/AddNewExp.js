import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addNewExp } from './experienceSlice'
import classes from './AddNewExp.module.css'
import { fetchApplicants, selectAllApplicants } from '../applicant/applicantSlice'

const AddNewExp = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        
        dispatch(fetchApplicants())
 
},[])
   
    // const { applicantId } = useParams()

    // console.log("Applicant Id in New Edu: "+applicantId)

    const applicants = useSelector(selectAllApplicants)
    let applicant;
    console.log("All applicants "+applicants)
    if(applicants.length === 0){
       applicant = applicants
    }else{
        applicant = applicants[ applicants.length - 1]
    }

    const applicantId = applicant.id
    console.log("Id IN Add Exp"+applicantId)



    const [position, setPosition] = useState('')
    const [company, setCompany] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const onPositionChange = e => setPosition(e.target.value)
    const onCompanyChange = e => setCompany(e.target.value)
    const onStartDateChange = e => setStartDate(e.target.value)
    const onEndDateChange = e => setEndDate(e.target.value)

    const canSave = [position, company, startDate, endDate].every(Boolean) && addRequestStatus === 'idle'

    
    const navigate = useNavigate()

    const onSubmit = (event) => {
        event.preventDefault()

        if (canSave) {
            try {
                setAddRequestStatus('pending')
                dispatch(
                    addNewExp({
                        exp:{
                            position,
                            company,
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

            setPosition('')
            setCompany('')
            setStartDate('')
            setEndDate('')
        }
    }

    return (
        <div className={classes.formboldmainwrapper}>

            <div className={classes.formboldformwrapper}>
                <form method="POST" onSubmit={onSubmit}>
                    <div>
                        <h2>Experience Form</h2>
                        <br />

                    </div>

                    <div className={classes.formboldmb3}>
                        <div>
                            <label for="position" className={classes.formboldformlabel}>
                                Position
                            </label>
                            <input
                                type="text"
                                name="position"
                                placeholder="Your Position"
                                className={classes.formboldforminput}
                                value={position}
                                onChange={onPositionChange}
                            />
                        </div>


                    </div>

                    <div className={classes.formboldmb3}>
                        <div>
                            <label for="company" className={classes.formboldformlabel}>
                                Company
                            </label>
                            <input
                                type="text"
                                name="company"
                                placeholder="Your company"
                                className={classes.formboldforminput}
                                value={company}
                                onChange={onCompanyChange}
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

                    <button type="submit" className={classes.formboldbtn} disabled={!canSave} > Create Experience </button>
                </form>

            </div>
        </div>
    )
}

export default AddNewExp