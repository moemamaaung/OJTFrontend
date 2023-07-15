import { useDispatch } from 'react-redux'
import { confirmApplicant, deleteApplicant } from './applicantSlice'
import ConfirmModal from '../component/utility/ConfirmModal'
import Backdrop from '../component/utility/BackDrop'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ApplicantItem = (props) => {
  const [isModalOpen, setModalOpen] = useState(false)
  

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

  
  function insertConfirmHandler(){
    dispatch(confirmApplicant(
      {
        applicant:{
          id:props.id,
          fullname:props.fullname,        
          username: props.username,
          phno:props.phno,
          street:props.street,
          township:props.township,
          city:props.city,
          gender:props.gender
        },
        id:props.id
      }
      
      )).unwrap()

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
      <td><Link to={`/admin/all/${props.id}`} style={{textDecoration : 'none'}} className="fw-bold text-success">Detail</Link></td>

      <td>
         
       

         <Link to={`/admin/register/${props.id}`} style={{textDecoration : 'none'}} ><p className="fw-bold text-success" onClick={insertConfirmHandler}>
           Confirm
        </p></Link>
        

      </td> 


 

      {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler} />}
      {isModalOpen && <Backdrop onBackdrop={backdropHandler} />}

    </tr>

  )

}

export default ApplicantItem