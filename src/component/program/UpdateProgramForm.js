import React from 'react'
import classes from '../mark/CreateMarkForm.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { selectProgramById, updateProgram } from './programSlices'
import { useNavigate, useParams } from 'react-router-dom'
import { selectAllAcademicyears } from '../academicyear/academicyearSlices'

const UpdateProgramForm = () => {
    const { programId } = useParams()
    const program = useSelector((state) => selectProgramById(state, Number(programId)))
    console.log("pppppp"+programId)
    console.log("ooooo"+program)

    const [id, setId] = useState(program?.id);
    const [programName, setProgramName] = useState(program?.programName);
    const [programFee, setProgramFee] = useState(program?.programFee);
    const [ACADEMICYEAR_ID, setAcademicyearId] = useState(program?.academicyear.id)
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const onProgramIdChange = e => setId(e.target.value);
    const onAcademicIdChange = e => setAcademicyearId(e.target.value)
    const onProgramNameChange = e => setProgramName(e.target.value);
    const onProgramFeeChange = e => setProgramFee(e.target.value);

    const canSave = [id, programName, programFee, ACADEMICYEAR_ID].every(Boolean) && addRequestStatus === 'idle'

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const academicyears = useSelector(selectAllAcademicyears)

    const onSubmit = (event) => {
        event.preventDefault();


        if (canSave) {
            try {
                setAddRequestStatus('pending')
                console.log("In the can save")

                dispatch(
                    //isEdit?
                    updateProgram({
                        id,
                        programName,
                        programFee,
                        ACADEMICYEAR_ID

                    }),
                )
            }

            catch (error) {
                console.log(error)

            } finally {
                setAddRequestStatus('idle')
            }


            setId('')
            setProgramName('')
            setProgramFee('')

            navigate(`/admin/program`)
        }
        console.log(canSave)

    }

    return (
        <div className={classes.all}>
            <div className={classes.wrapper}>


                <h2>Update Program Form</h2>
                <form onSubmit={onSubmit}>
                    <div className={classes.row}>

                        <div className={classes.col}>

                            <div className={classes.col}>

                                <div className={classes.inputGroup}>
                                    <div className={classes.inputBox}>

                                        <input
                                            type="text"

                                            placeholder="Program Name"
                                            required
                                            className={classes.name}
                                            value={programName}
                                            onChange={onProgramNameChange}
                                        />

                                    </div>
                                </div>


                                <div className={classes.inputGroup}>
                                    <div className={classes.inputBox}>
                                        <input
                                            type="text"

                                            placeholder="Program Fee"
                                            required
                                            className={classes.name}
                                            value={programFee}
                                            onChange={onProgramFeeChange}
                                        />

                                    </div>
                                </div>

                                <div className={classes.inputGroup}>
                                    <div className={classes.inputBox}>
                                        <select
                                            className={classes.name}
                                            value={ACADEMICYEAR_ID}
                                            onChange={onAcademicIdChange} >

                                            <option value="">Choose AcademicYear</option>
                                            {academicyears.map((p) =>

                                                <option key={p.id} value={p.id}>
                                                    {p.name}
                                                </option>

                                            )};

                                        </select>


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

export default UpdateProgramForm