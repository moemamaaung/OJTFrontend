import { useDispatch, useSelector } from 'react-redux'
import classes from '../program/CreateProgramForm.module.css'
import { Link, useParams } from 'react-router-dom'

import { useEffect, useState } from 'react';
import ConfirmModal from '../utility/ConfirmModal';
import { deleteTime, fetchTime, selectAllTimes, selectProgramById, selectProgramTimetableById, selectTimeById } from '../time/timeSlice';

const TimetableItem = (props) => {
    const text = `m-0  font-weight-bold   text-center ${classes.text}`
    const color1 = `btn btn-primary ${classes.color1}`
    const text1 = `btn btn-primary me-5 ${classes.text1}`
    const dispatch = useDispatch();

    const time = props
    
    const [isModalOpen, setModalOpen] = useState(false)
    const deleteHandler = () => {
        setModalOpen(true);
    }

    function cancelHandler() {
        setModalOpen(false);
    }

    function confirmHandler() {
        dispatch(deleteTime(props.id)).unwrap()

        setModalOpen(false)
    }
    return (
        <div class="container mt-5">
            <div className={classes.all}>
                <div className={classes.wrapper}>
                    <div className={classes.row}>

                        <div className={classes.col}>
                            <div className={classes.inputGroup}>
                                <div className={classes.inputGroup}>
                                    <div className={classes.inputBox}>
                                        <h4> {props.program.programName} - Schedule</h4>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={classes.col}>
                            <div className={classes.inputGroup}>
                                <div className={classes.inputGroup}>
                                    <div className={classes.inputBox}>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <table class="table table-striped table-bordered mt-1">

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
                                <td className='text-center'>{time.sub}</td>
                                <td className='text-center'>{time.subk}</td>
                                <td className='text-center'>{time.subl} </td>
                                <td className='text-center'>{time.subName}</td></tr>
                            <tr>

                                <td className='text-center'>TUE</td>
                                <td className='text-center'>{time.suba}</td>
                                <td className='text-center'> {time.subb}</td>
                                <td className='text-center'>{time.subm}</td>
                                <td className='text-center'>{time.subd}</td>
                            </tr>
                            <tr>
                                <td className='text-center'>WED</td>
                                <td className='text-center'>{time.sube}</td>
                                <td className='text-center'> {time.subf}</td>
                                <td className='text-center'>{time.subn}</td>
                                <td className='text-center'>{time.subh}</td></tr>
                            <tr>
                                <td className='text-center'>THU</td>
                                <td className='text-center'>{time.subject}</td>
                                <td className='text-center'> {time.subc}</td>
                                <td className='text-center'>{time.subo}</td>
                                <td className='text-center'>{time.subg}</td></tr>
                            <tr>

                                <td className='text-center'>FRI</td>
                                <td className='text-center'>{time.subi}</td>
                                <td className='text-center'>{time.subp}</td>
                                <td className='text-center'>{time.subq}</td>
                                <td className='text-center'>{time.subj}</td>
                            </tr>
                        </tbody> 


                    </table>
                    <Link to={`/admin/time/edit/${props.id}`} className={text1}>Update</Link>
                    <Link onClick={deleteHandler} className={color1}>Delete</Link>

                    {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler} />}

                </div>
            </div>

        </div>



    )
}

export default TimetableItem