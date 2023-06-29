import React from 'react'
import { deleteExp } from './experienceSlice'
import { useDispatch } from 'react-redux'

const ExpItem = (props) => {
    const dispatch = useDispatch()
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.position}</td>
      <td>{props.company}</td>
      <td>{props.startDate}</td>
      <td>{props.endDate}</td>
      <td><button onClick={()=>{dispatch(deleteExp(props.id))}}  className="bg-primary">Delete</button></td> 
  </tr>
  )
}

export default ExpItem