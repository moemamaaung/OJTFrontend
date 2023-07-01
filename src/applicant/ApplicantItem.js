import { useDispatch } from 'react-redux'
import { confirmApplicant, deleteApplicant } from './applicantSlice'
import ConfirmModal from '../component/utility/ConfirmModal'
import Backdrop from '../component/utility/BackDrop'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ApplicantItem = (props) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()


  function deleteHandler() {
    setModalOpen(true)
  }

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
          name:props.name,        
          email: props.email,
          phno:props.phno,
          street:props.street,
          township:props.township,
          city:props.city,
          gender:props.gender
        },
        id:props.id
      }
      
      )).unwrap()
      navigate(`/admin/confirm`)

    setModalOpen(false)
  }
  console.log("Eduction : "+props.edu)
 

  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.fullname}</td>
      <td>{props.username}</td>
      <td>{props.phno}</td>
      <td>{props.gender}</td>
      <td>{String(props?.edu.education)}</td>
      <td>{props.edu.degree}</td>
      <td>{props.edu.university}</td>
      {/* <td>{props.startDate}</td>
      <td>{props.endDate}</td> 
      <td>{props.street}</td>
      <td>{props.township}</td>
      <td>{props.city}</td>
       */}
      <td><Link to={`/admin/all/${props.id}`}>Detail</Link></td>

      <td>
         
       

         <Link to={`/admin/register/${props.id}`}><button onClick={insertConfirmHandler}>
           Confirm
        </button></Link>
        

      </td> 


    <td>
         {/* <Link to={`/newedu/${props.id}`}>
        
            <i className="fa fa-flag-checkered pr-1" title=''>Add Education </i>
          
        </Link>
         */}
         <i className="fas fa-trash-alt" onClick={deleteHandler}></i>
      </td> 

      {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler} />}
      {isModalOpen && <Backdrop onBackdrop={backdropHandler} />}

    </tr>

  )

}

export default ApplicantItem