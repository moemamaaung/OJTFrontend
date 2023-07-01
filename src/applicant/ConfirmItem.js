import React from "react";

const ConfirmItem = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.fullname}</td>
      <td>{props.username}</td>
      <td>{props.phno}</td>
      <td>{props.gender}</td>
      <td>{props.street}</td>
      <td>{props.township}</td>
      <td>{props.city}</td>
      
    </tr>
  );
};

export default ConfirmItem;
