import { useDispatch, useSelector } from 'react-redux'
import classes from '../program/CreateProgramForm.module.css'
import { Link, useParams } from 'react-router-dom'
import { deleteTime, selectProgramById } from './timeSlice';
import { useState } from 'react';
import ConfirmModal from '../utility/ConfirmModal';




const TimeItem = (props) => {
    const text = `m-0  font-weight-bold   text-center ${classes.text}`
    const color1 = `btn btn-primary ${classes.color1}`
    const text1 = `btn btn-primary me-5 ${classes.text1}`
    const dispatch = useDispatch();

   

    // const programId = props.programId
    // console.log("ProgramId is " + programId)
    // const programs = useSelector((state) => selectProgramById(state,Number(programId)))
    // console.log("Programs" + programs)
   
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
                        <td className='text-center'>{props.sub}</td>
                        <td className='text-center'>{props.subk}</td>
                        <td className='text-center'>{props.subl} </td>
                        <td className='text-center'>{props.subName}</td></tr>
                    <tr>
                       
                        <td className='text-center'>TUE</td>
                        <td className='text-center'>{props.suba}</td>
                        <td className='text-center'> {props.subb}</td>
                        <td className='text-center'>{props.subm}</td>
                        <td className='text-center'>{props.subd}</td>
                    </tr>
                    <tr>
                        <td className='text-center'>WED</td>
                        <td className='text-center'>{props.sube}</td>
                        <td className='text-center'> {props.subf}</td>
                        <td className='text-center'>{props.subn}</td>
                        <td className='text-center'>{props.subh}</td></tr>
                    <tr>
                       <td className='text-center'>THU</td>
                        <td className='text-center'>{props.subject}</td>
                        <td className='text-center'> {props.subc}</td>
                        <td className='text-center'>{props.subo}</td>
                        <td className='text-center'>{props.subg}</td></tr>
                    <tr>
                       
                        <td className='text-center'>FRI</td>
                        <td className='text-center'>{props.subi}</td>
                        <td className='text-center'>{props.subp}</td>
                        <td className='text-center'>{props.subq}</td>
                        <td className='text-center'>{props.subj}</td>
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

export default TimeItem