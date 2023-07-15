import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteAcademicYear } from './academicyearSlices';
import { Link } from 'react-router-dom';
import ConfirmModal from '../utility/ConfirmModal';
import BackDrop from '../utility/BackDrop';

const AcademicYearItem = (props) => {
  const dispatch = useDispatch();
     
      
    const [isModalOpen, setModalOpen] = useState(false)
    
    function backdropHandler(){
      setModalOpen(false);
  }
  

  function deleteHandler() {
      setModalOpen(true);
  }
  
  function cancelHandler() {
      setModalOpen(false);
  }
  
  function confirmHandler() {
      dispatch(deleteAcademicYear(props.id)).unwrap()
      setModalOpen(false)
  }
  return (
    <tr>
    <td>{props.id}</td>
    <td> {props.value}</td>
    
    <td><Link to={`/admin/academicyear/edit/${props.id}`}><i class="far fa-edit fa-lg"></i></Link>
      <Link onClick={deleteHandler}><i class="ms-3 fas fa-trash fa-lg"></i></Link>
    </td>
  
        {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler} />}
        {/* {isModalOpen && <BackDrop onBackdrop={backdropHandler}/>}  */}
     
 </tr>
  )
}

export default AcademicYearItem