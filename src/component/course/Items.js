
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse } from "./courseSlice";
import BackDrop from "../utility/BackDrop";
import ConfirmModal from "../utility/ConfirmModal";
import { useState } from "react";
import { selectProgramById } from "../program/programSlices";
const Items = (props) => {

  const dispatch = useDispatch()



  const [isModalOpen,setModalOpen] = useState(false)

  function deleteHandler(){
    setModalOpen(true);
}

function backdropHandler(){
    setModalOpen(false);
}

function cancelHandler(){
    setModalOpen(false);
}


function confirmHandler(){
  dispatch(deleteCourse(props.id)).unwrap()

  setModalOpen(false)
}


  return (
    <tr>
      <td>000{props.id}</td>
      <td>{props.program?.programName}</td>
      <td>{props.subject1}</td>
      <td>{props.subject2}</td>
      <td>{props.subject3}</td>
      <td>{props.subject4}</td>
      <td>{props.subject5}</td>
      <td>{props.subject6}</td>
     
      <td><Link to={`/admin/course/update/${props.id}`}  ><i class="far fa-edit fa-lg"></i></Link>&nbsp;&nbsp;&nbsp;
           <Link onClick={deleteHandler} type='button'  ><i class="ms-3 fas fa-trash fa-lg"></i></Link>
      </td>
    
     {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler}/>}

     </tr>
  );
};

export default Items;
