import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addNewApplicant, selectApplicantById } from './applicantSlice'
import classes from './AddNewApplicantForm.module.css'
import { selectAllPrograms} from '../component/program/programSlices'


const AddNewApplicantForm = () => {

    
    const [fullname, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phno, setPhno] = useState('')
    const [street, setStreet] = useState('')
    const [township, setTownship] = useState('')
    const [city, setCity] = useState('')
    const [gender, setGender] = useState('')
    const [PROGRAM_ID,setProgramId] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

     const onProgramIdChange = e => setProgramId(e.target.value)
    const onNameChange = e => setName(e.target.value)
    const onEmailChange = e => setEmail(e.target.value)
    const onPhnoChange = e => setPhno(e.target.value)
    const onStreetChange = e => setStreet(e.target.value)
    const onTownshipChange = e => setTownship(e.target.value)
    const onCityChange = e => setCity(e.target.value)
    const onGenderChange = e => setGender(e.target.value)

    const canSave = [fullname, email, phno, street, township, city, gender].every(Boolean) && addRequestStatus === 'idle'
    console.log("AddRequestStatus" + addRequestStatus)

    const dispatch = useDispatch()
    const navigate = useNavigate()



    const onSubmit = (event) => {
        event.preventDefault()
        console.log("OnSubmit")


        console.log("CanSave" + canSave)
        if (canSave) {
            try {
                setAddRequestStatus('pending')

                dispatch(
                    addNewApplicant({
                        fullname,
                        username:email,
                        phno,
                        street,
                        township,
                        city,
                        gender,
                        PROGRAM_ID

                    }
                    )).unwrap()

                navigate(`/viewapp`)

            } catch (error) {
                console.log(error)
            } finally {
                setAddRequestStatus('idle')
            }

            setName('')
            setEmail('')
            setPhno('')
            setStreet('')
            setTownship('')
            setCity('')
            setGender('')



        }
    }
    const programs = useSelector(selectAllPrograms)

    console.log(programs)
   
    return (
        <div className={classes.formboldmainwrapper}>

            <div className={classes.formboldformwrapper}>
                <form onSubmit={onSubmit}>
                    <div>
                        <h2>Applicant Form</h2>
                        <br />

                    </div>

                     <div className={classes.inputGroup}>
                        <div className={classes.inputBox}>
                            <select
                                className={classes.name}
                                value={PROGRAM_ID}
                                onChange={onProgramIdChange}
>
                                <option value="">Choose Program</option>

                                {programs.map((program) => (

                                    <option key={program.id}
                                        value={program.id}

                                    >
                                        {program.programName}
                                    </option>
                                ))}

                            </select>

                        </div>
                    </div> 


                    <div className={classes.formboldmb3}>
                        <div>
                            <label for="name" className={classes.formboldformlabel}>
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className={classes.formboldforminput}
                                value={fullname}
                                onChange={onNameChange}
                            />
                        </div>


                    </div>

                    <div className={classes.formboldmb3}>
                        <div>
                            <label for="email" className={classes.formboldformlabel}>
                                Email
                            </label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Your Email"
                                className={classes.formboldforminput}
                                value={email}
                                onChange={onEmailChange}
                            />
                        </div>
                    </div>
                    <div className={classes.formboldmb3}>
                        <div>
                            <label for="phno" className={classes.formboldformlabel}>
                                Phno
                            </label>
                            <input
                                type="text"
                                name="phno"
                                placeholder="Your Phno"
                                className={classes.formboldforminput}
                                value={phno}
                                onChange={onPhnoChange}
                            />
                        </div>
                    </div>

                    <div className={classes.formboldinputflex}>
                        <div>
                            <label for="street" className={classes.formboldformlabel}> Street </label>
                            <input
                                type="text"
                                name="street"
                                placeholder="Street"
                                className={classes.formboldforminput}
                                value={street}
                                onChange={onStreetChange}
                            />
                        </div>
                        <div>
                            <label for="township" className={classes.formboldformlabel}> Township </label>
                            <input
                                type="text"
                                name="township"
                                placeholder="Township"
                                className={classes.formboldforminput}
                                value={township}
                                onChange={onTownshipChange}
                            />
                        </div>
                    </div>
                    <div>
                        <label for="city" className={classes.formboldformlabel}>
                            City
                        </label>
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            className={classes.formboldforminput}
                            value={city}
                            onChange={onCityChange}
                        />
                    </div>
                    <br />

                    <div>
                        <select className="form-select" value={gender} onChange={onGenderChange}>
                            <option >Choose Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>



                    <button type="submit" className={classes.formboldbtn}>Create Applicant </button>
                    {/* <button type="submit" className={classes.formboldbtn}  disabled={!canSave}><Link to="/newedu">Next</Link></button> */}

                </form>

            </div>
        </div>
    )
}

export default AddNewApplicantForm