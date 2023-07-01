import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'



import { selectUserById } from '../features/user/userSlice';
import { selectProgramById } from '../program/programSlices';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
 
  
  return (
   
      <tr>
      <td>{props.id}</td>
      
        <td>{props.fullname}</td>
        <td>{props.username}</td>
        <td>{props.password}</td>
        <td>{props.program?.programName}</td> 
        <td><Link to='/admin/email'>Send</Link></td>
       
       
   
      
       
      </tr>

     
    
  )
}

export default UserItem