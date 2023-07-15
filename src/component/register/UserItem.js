import { Link } from "react-router-dom";

const UserItem = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.fullname}</td>
      <td>{props.username}</td>
      <td>{props.program?.programName}</td>
      <td><Link to={`/admin/user/detail/${props.id}`} style={{textDecoration : 'none'}} className="fw-bold text-success">Detail</Link></td>
      
      <td><Link to={`/admin/email/${props.id}`} style={{textDecoration:'none'}}><i class="fas fa-envelope fa-lg"></i></Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to={`/admin/user/edit/${props.id}`}><i class="far fa-edit fa-lg"></i></Link></td>
      
    </tr>
  );
};

export default UserItem;
