import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import classes from '../program/CreateProgramForm.module.css'
import { addNewTime } from './timeSlice'
import { selectAllPrograms } from '../program/programSlices'

const CreatTime = (props) => {
    const text = `m-0  font-weight-bold   text-center ${classes.text}`

    const [programId, setProgramId] = useState('')

    const [subk, setSubk] = useState('')
    const [subject, setSubject] = useState('')
    const [subName, setSubName] = useState('')
    const [sub, setSub] = useState('')
    const [suba, setSuba] = useState('')

    const [subb, setSubb] = useState('')
    const [subc, setSubc] = useState('')
    const [subd, setSubd] = useState('')
    const [sube, setSube] = useState('')
    const [subf, setSubf] = useState('')

    const [subg, setSubg] = useState('')
    const [subh, setSubh] = useState('')
    const [subi, setSubi] = useState('')
    const [subj, setSubj] = useState('')
    const [subl, setSubl] = useState('')

    const [subm, setSubm] = useState('')
    const [subn, setSubn] = useState('')
    const [subo, setSubo] = useState('')
    const [subp, setSubp] = useState('')
    const [subq, setSubq] = useState('')


    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const onProgramIdChange = e => setProgramId(e.target.value)

    const onSubk = e => setSubk(e.target.value)
    const onSubject = e => setSubject(e.target.value)
    const onSubName = e => setSubName(e.target.value)
    const onSub = e => setSub(e.target.value)
    const onSuba = e => setSuba(e.target.value)

    const onSubb = e => setSubb(e.target.value)
    const onSubc = e => setSubc(e.target.value)
    const onSubd = e => setSubd(e.target.value)
    const onSube = e => setSube(e.target.value)
    const onSubf = e => setSubf(e.target.value)

    const onSubg = e => setSubg(e.target.value)
    const onSubh = e => setSubh(e.target.value)
    const onSubi = e => setSubi(e.target.value)
    const onSubj = e => setSubj(e.target.value)
    const onSubl = e => setSubl(e.target.value)

    const onSubm = e => setSubm(e.target.value)
    const onSubn = e => setSubn(e.target.value)
    const onSubo = e => setSubo(e.target.value)
    const onSubp = e => setSubp(e.target.value)
    const onSubq = e => setSubq(e.target.value)



    const canSave = [subk, subject, subName, sub, suba, subb, subc,
        subd, sube, subf, subg, subh, subi, subj,
        subl, subm, subn, subo, subp, subq
    ].every(Boolean) && addRequestStatus === 'idle'

    const dispatch = useDispatch();
    const navigate = useNavigate()


    const program = useSelector(selectAllPrograms)


    const onSubmit = (event) => {
        event.preventDefault();

        if (canSave) {
            try {
                setAddRequestStatus('pending')

                dispatch(
                    addNewTime({
                        subk, subject, subName, sub, suba, subb, subc, subd, sube, subf, subg, subh, subi, subj
                        , subl, subm, subn, subo, subp, subq,programId

                    }),

                );
            }
            catch (error) {
                console.log(error)
            } finally {
                setAddRequestStatus('idle')
            }

            setSubk('');
            setSub('');
            setSubject('');
            setSubName('');
            setSuba('');

            setSubb('');
            setSubc('');
            setSubd('');
            setSube('');
            setSubf('');

            setSubg('');
            setSubh('');
            setSubi('');
            setSubj('');
            setSubl('');

            setSubm('');
            setSubn('');
            setSubo('');
            setSubp('');
            setSubq('');

            navigate(`/admin/timetable`)
        }
    }
   
    return (

        <div class="container mt-5">
            <div className={classes.all}>
                <div className={classes.wrapper}>
                    <h1>Create Timetable Form</h1>
                    <form onSubmit={onSubmit}>
                    
                    <div className={classes.inputGroup}>
                                <div className={classes.inputBox}>
                                    <select
                                        className={classes.name}
                                        value={programId}
                                        onChange={onProgramIdChange} >
                                        <option value="">Choose Program</option>
                                        {program.map((p) =>

                                            <option key={p.id} value={p.id}>
                                                {p.programName}
                                            </option>

                                        )};

                                    </select>


                                </div>
                            </div>


                        <table class="table table-bordered mt-5">

                            <thead className={text}>
                                <tr>


                                    <th>Day</th>
                                    <th>9:00AM-11:00AM</th>
                                    <th>9:00AM-11:00AM</th>
                                    <th>Break Time</th>
                                    <th>2:00PM-4:00PM</th>

                                </tr>
                            </thead>


                            <tbody>
                                <tr>
                                    <td className='text-center'>MON</td>
                                    <td className='text-center'>
                                        <input
                                            type="text"
                                            name='timetable'

                                            required
                                            value={subk}
                                            onChange={onSubk}
                                        />
                                    </td>
                                    <td className='text-center'> <input
                                        type="text"
                                        name='timetable'
                                        className='bg-light'
                                        required
                                        value={subName}
                                        onChange={onSubName}
                                    /></td>
                                    <td className='text-center'>
                                        <input
                                            type="text"
                                            name='timetable'
                                            required
                                            value={subl}
                                            onChange={onSubl}
                                        />

                                    </td>
                                    <td className='text-center'> <input
                                        type="text"
                                        name='timetable'

                                        required
                                        value={subject}
                                        onChange={onSubject}
                                    /></td></tr>
                                <tr>

                                    <td className='text-center'>TUE</td>
                                    <td className='text-center'> <input
                                        type="text"
                                        name='timetable'

                                        required
                                        value={sub}
                                        onChange={onSub}
                                    /></td>
                                    <td className='text-center'>  <input
                                        type="text"
                                        name='timetable'

                                        required
                                        value={suba}
                                        onChange={onSuba}
                                    /></td>
                                    <td className='text-center'>
                                        <input
                                            type="text"
                                            name='timetable'
                                            required
                                            value={subm}
                                            onChange={onSubm}
                                        />
                                    </td>
                                    <td className='text-center'> <input
                                        type="text"
                                        name='timetable'

                                        required
                                        value={subc}
                                        onChange={onSubc}
                                    /></td>
                                </tr>

                                <tr>
                                    <td className='text-center'>WED</td>
                                    <td className='text-center'> <input
                                        type="text"
                                        name='timetable'

                                        required
                                        value={subd}
                                        onChange={onSubd}
                                    /></td>
                                    <td className='text-center'>
                                        <input
                                            type="text"
                                            name='timetable'
                                            required
                                            value={sube}
                                            onChange={onSube}
                                        />
                                    </td>
                                    <td className='text-center'>
                                        <input
                                            type="text"
                                            name='timetable'
                                            required
                                            value={subn}
                                            onChange={onSubn}
                                        />
                                    </td>
                                    <td className='text-center'> <input
                                        type="text"
                                        name='timetable'

                                        required
                                        value={subf}
                                        onChange={onSubf}
                                    /></td></tr>
                                <tr>
                                    <td className='text-center'>THU</td>
                                    <td className='text-center'> <input
                                        type="text"
                                        name='timetable'

                                        required
                                        value={subg}
                                        onChange={onSubg}
                                    /></td>
                                    <td className='text-center'> <input
                                        type="text"
                                        name='timetable'

                                        required
                                        value={subh}
                                        onChange={onSubh}
                                    /></td>
                                    <td className='text-center'>
                                        <input
                                            type="text"
                                            name='timetable'
                                            required
                                            value={subo}
                                            onChange={onSubo}
                                        />
                                    </td>
                                    <td className='text-center'><input
                                        type="text"
                                        name='timetable'

                                        required
                                        value={subi}
                                        onChange={onSubi}
                                    /></td></tr>
                                <tr>

                                    <td className='text-center'>FRI</td>
                                    <td className='text-center'><input
                                        type="text"
                                        name='timetable'

                                        required
                                        value={subj}
                                        onChange={onSubj}
                                    /></td>
                                    <td className='text-center'>

                                        <input
                                            type="text"
                                            name='timetable'
                                            required
                                            value={subp}
                                            onChange={onSubp}
                                        /></td>
                                    <td className='text-center'><input
                                        type="text"
                                        name='timetable'
                                        required
                                        value={subq}
                                        onChange={onSubq}
                                    /></td>
                                    <td className='text-center'>
                                        <input
                                            type="text"
                                            name='timetable'
                                            required
                                            value={subb}
                                            onChange={onSubb}
                                        />
                                    </td>
                                </tr>
                            </tbody>


                        </table>
                        <div className={classes.inputGroup}>
                                <div className={classes.inputBox}>
                                    <button type="submit" className={classes.btn}>Create</button>
                                </div>
                            </div>
                    </form>
                </div>
            </div>

        </div>


    )
}

export default CreatTime