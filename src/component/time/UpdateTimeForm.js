import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import classes from '../program/CreateProgramForm.module.css'
import {  selectTimeById, updateTime } from './timeSlice'
import { selectAllPrograms } from '../program/programSlices'

const UpdateTimeForm = (props) => {
    const text = `m-0  font-weight-bold   text-center ${classes.text}`

    const { timeId } = useParams( )
    const time = useSelector((state)=>selectTimeById(state,Number(timeId))) 
    console.log(timeId)
    console.log(time)

    const [id,setId] = useState(time?.id);
    const [programId, setProgramId] = useState(time?.program.id)

    const [subk, setSubk] = useState(time?.subk)
    const [subject, setSubject] = useState(time?.subject)
    const [subName, setSubName] = useState(time?.subName)
    const [sub, setSub] = useState(time?.sub)
    const [suba, setSuba] = useState(time?.suba)

    const [subb, setSubb] = useState(time?.subb)
    const [subc, setSubc] = useState(time?.subc)
    const [subd, setSubd] = useState(time?.subd)
    const [sube, setSube] = useState(time?.sube)
    const [subf, setSubf] = useState(time?.subf)

    const [subg, setSubg] = useState(time?.subg)
    const [subh, setSubh] = useState(time?.subh)
    const [subi, setSubi] = useState(time?.subi)
    const [subj, setSubj] = useState(time?.subj)
    const [subl, setSubl] = useState(time?.subl)

    const [subm, setSubm] = useState(time?.subm)
    const [subn, setSubn] = useState(time?.subn)
    const [subo, setSubo] = useState(time?.subo)
    const [subp, setSubp] = useState(time?.subp)
    const [subq, setSubq] = useState(time?.subq)


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



    const canSave = [id,subk, subject, subName, sub, suba, subb, subc,
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
                    updateTime({
                        id,subk, subject, subName, sub, suba, subb, subc, subd, sube, subf, subg, subh, subi, subj
                        , subl, subm, subn, subo, subp, subq,programId

                    }),

                );
            }
            catch (error) {
                console.log(error)
            } finally {
                setAddRequestStatus('idle')
            }

            setId('');
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
    function onConfirm() {
        props.onConfirm();
    }
    return (




        <div class="container mt-5">
            <div className={classes.all}>
                <div className={classes.wrapper}>
                    <h1 className='text-center'>Update Timetable</h1>
                    <form onSubmit={onSubmit}>
                    <div className={classes.inputGroup}>
                                <div className={classes.inputBox}>
                                    <select
                                        className={classes.name}
                                        value={programId}
                                        onChange={onProgramIdChange} >
                                        <option value="">Choose Program</option>
                                        {program.map((a) =>

                                            <option key={a.id} value={a.id}>
                                                {a.programName}
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
                                    <button type="submit" className={classes.btn}>Update</button>
                                </div>
                            </div>
                    </form>
                </div>
            </div>

        </div>


    )
}

export default UpdateTimeForm