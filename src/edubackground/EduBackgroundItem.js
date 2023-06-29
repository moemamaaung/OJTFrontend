
import { useDispatch } from 'react-redux'
import { deleteEdu } from './edubackgroundSlice'

const EduBackgroundItem = (props) => {
    const dispatch = useDispatch()
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.education}</td>
      <td>{props.degree}</td>
      <td>{props.university}</td>
      <td>{props.startDate}</td>
      <td>{props.endDate}</td>
      
      <td><button onClick={()=>{dispatch(deleteEdu(props.id))}}  className="bg-primary">Delete</button></td> 
  </tr>
  )
}

export default EduBackgroundItem