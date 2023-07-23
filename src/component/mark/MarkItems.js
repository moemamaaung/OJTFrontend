import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletemarks } from "./markSlice";
import classes from '../program/CreateProgramForm.module.css'
import ConfirmModal from "../utility/ConfirmModal";
import { useState } from "react";
import { selectProgramUserById } from "../features/user/userSlice";


const MarkItems = (props) => {
  const text = `m-0  font-weight-bold  ${classes.text}`
  const t = `table table-striped  table-bordered mt-1 w-50 mt-4 ${classes.t}`
  const p = `text-center  `
  const dispatch = useDispatch();
  console.log(props)

  // const pId = props.programId
  // console.log(pId)

  // const users =useSelector((state)=>selectProgramUserById(state,Number(pId)))
  // console.log(users)

  const [isModalOpen, setModalOpen] = useState(false)
  
  const { subject1Score, subject2Score, subject3Score, subject4Score,subject5Score,subject6Score } = props;

  const calculateSum = () => {
    const sum = subject1Score + subject2Score + subject3Score + subject4Score+subject5Score+subject6Score ;
    return sum;
  };


  function deleteHandler() {
    setModalOpen(true);
  }

  function cancelHandler() {
    setModalOpen(false);
  }

  function confirmHandler() {
    dispatch(deletemarks(props.id)).unwrap()

    setModalOpen(false)
  }
  console.log(props)

  return (


   
    <tr>
    <td>{props.id}</td>
      <td>{props.fullname}</td>
      <td>{props.username}</td>
      <td>{props.program.programName}</td>
      {/* <td>{props.exam.examType}</td> */}
      <td><Link to={`/admin/mark/${props.id}`} style={{textDecoration : 'none'}}>View Scores </Link></td>
      <td><Link to={`/admin/mark/edit/${props.id}`}><i class="far fa-edit fa-lg"></i></Link>
      <Link onClick={deleteHandler}><i class="ms-3 fas fa-trash fa-lg"></i></Link>
    </td>
      
        {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler} />}
      </tr>
  

  


   
  );
};

export default MarkItems;
