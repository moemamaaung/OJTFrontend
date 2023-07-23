import { useDispatch } from 'react-redux'
import { confirmApplicant, deleteApplicant, updateApplicant } from './applicantSlice'
import ConfirmModal from '../component/utility/ConfirmModal'
import Backdrop from '../component/utility/BackDrop'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from '../component/course/CreateCourseForm.module.css'


const ApplicantItem = (props) => {
  const b = `fw-bold text-success  ${classes.b}`
  const [isModalOpen, setModalOpen] = useState(false)
  const programId = props.program.id
  const eduId = props.edu.id
  console.log(eduId)
  const expId = props.exp.id
  console.log(expId)
  console.log("Program Id"+programId)
  console.log(props.status)

  const dispatch = useDispatch()
  
  function backdropHandler() {
    setModalOpen(false)
  }

  function cancelHandler() {
    setModalOpen(false)
  }

  function confirmHandler() {
    dispatch(deleteApplicant(props.id)).unwrap()

    setModalOpen(false)
  }


  const funDisabled = () => {
    if (props.status === 'Confirmed') {
      return true
    } else if (props.status === 'Confirm') {
      return false
    }
  }
  
  function insertConfirmHandler(){

    dispatch(updateApplicant({
      applicants: {
        id:props.id,
        fullname: props.fullname,
        username: props.username,
        phno: props.phno,
        street: props.street,
        township: props.township,
        city: props.city,
        gender: props.gender,
        confirm:props.confirm


      },programId,expId,eduId
    }
    
  )

  ).unwrap()

    setModalOpen(false)
  }
  console.log("Eduction education : "+props.edu.education)
 

  return (
    <tr>
     <td>{props.id}</td>
      <td>{props.fullname}</td>
      <td>{props.username}</td>
      <td>{props.phno}</td>
      <td>{props.gender}</td>
      <td>{props.program.programName}</td>
      <td><Link to={`/admin/all/${props.id}`} style={{textDecoration : 'none'}} className="fw-bold text-success">View Details</Link></td>

      <td>
         
       

         <Link to={`/admin/register/${props.id}`} style={{textDecoration : 'none'}} ><button  className={b} onClick={insertConfirmHandler} disabled={funDisabled()}>
          {props.status}
        </button></Link>
        

      </td> 


 

      {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler} />}
      {isModalOpen && <Backdrop onBackdrop={backdropHandler} />}

    </tr>

  )

}

export default ApplicantItem