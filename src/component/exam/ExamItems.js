import { Link } from "react-router-dom";
import { deleteExam } from "./examSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import ConfirmModal from '../utility/ConfirmModal' 
import BackDrop from "../utility/BackDrop";
const ExamItems = (props) => {
  const dispatch = useDispatch();

  const [isModalOpen, setModalOpen] = useState(false);

  function deleteHandler() {
    setModalOpen(true);
  }

  function backdropHandler() {
    setModalOpen(false);
  }

  function cancelHandler() {
    setModalOpen(false);
  }

  function confirmHandler() {
    dispatch(deleteExam(props.id)).unwrap();
    setModalOpen(false);
  }

  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.examType}</td>
      <td>
        <Link
          to={`/exam/update/${props.id}`}
          type="button"
          className="btn btn-primary"
        >
          Update
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link onClick={deleteHandler} type="button" className="btn btn-danger">
          Delete
        </Link>
      </td>
      {isModalOpen && 
        <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler} />
      }
      {isModalOpen && <BackDrop onBackdrop={backdropHandler} />}
    </tr>
  );
};

export default ExamItems;
