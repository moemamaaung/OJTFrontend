import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteLecturer } from "./lecturerSlice";

const LecturerItems = (props) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td><img src={props.profile} className="image fluid" width="150" height="150" /></td>
     
      {/* <td>{props.gender}</td>
      <td>{props.email}</td>
      <td>{props.phoneNo}</td>
      <td>{props.address}</td>
     
      <td>{props.age}</td>
      <td>{props.qualification}</td> */}
      <td><Link to={`/admin/lecturer/${props.id}`} style={{textDecoration : 'none'}} className="fw-bold text-success">View Details</Link></td>


      <td>
        
        <Link
          to={`/admin/lecturer/update/${props.id}`}
          type="button"
          // className="btn btn-primary"
        >
         <i class="far fa-edit fa-lg"></i>
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link
          onClick={() => {
            dispatch(deleteLecturer(props.id));
          }}
          type="button"
          // className="btn btn-danger"
        >
        <i class="ms-3 fas fa-trash fa-lg"></i>
        </Link>
      </td>
    </tr>
  );
};

export default LecturerItems;
