import MarkList from "./MarkList"
import AddCreateButton from "./AddCreateButton"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchMarks } from "./markSlice"
import classes from '../Abouts.module.css'
const MarkTable = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMarks());
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <div className="card-body">
        <h1 className="m-0  font-weight-bold text-primary">Mark List</h1>
        <br />
        
        <AddCreateButton />
        <br />
        {/* <div class="container mt-5"> */}
       <MarkList />
        {/* </div> */}
      </div>
    </div>
  )
}

export default MarkTable