import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { deleteProgram, fetchPrograms } from './programSlices';
import ConfirmModal from '../utility/ConfirmModal';
import { fetchAcademicyears, selectAcademicyearById } from '../academicyear/academicyearSlices';

const ProgramItem = (props) => {
  const dispatch = useDispatch();


  const [isModalOpen, setModalOpen] = useState(false)


  function deleteHandler() {
    setModalOpen(true);
  }

  function cancelHandler() {
    setModalOpen(false);
  }

  function confirmHandler() {
    dispatch(deleteProgram(props.id)).unwrap()

    setModalOpen(false)
  }
  return (
      <tr>
        <td>{props.id}</td>
        <td>{props.programName}</td>
        <td>{props.programFee}</td>
         <td>{props.academicyear?.value}</td> 
         <td><Link to={`/admin/program/edit/${props.id}`}><i class="far fa-edit fa-lg"></i></Link>
      <Link onClick={deleteHandler}><i class="ms-3 fas fa-trash fa-lg"></i></Link>
    </td>
      
        {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler} />}
      </tr>

     
    
  )
}

export default ProgramItem