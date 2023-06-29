import { useDispatch, useSelector } from "react-redux"
import ProgramFee from "./ProgramFee"
import Top from "./Top"
import { fetchPrograms, getProgramStatus, selectAllPrograms } from './program/programSlices'
import { useEffect } from "react"
import classes from './ProgramFee.module.css'


const ProgramFee1 = () => {
  const dispatch = useDispatch()
  const programs = useSelector(selectAllPrograms)
  
  console.log("ProgramFee1"+ programs)
  const programStatus = useSelector(getProgramStatus)

  useEffect(()=>{
    if(programStatus === 'idle'){
        dispatch(fetchPrograms())
    }
},[programStatus,dispatch])

console.log(fetchPrograms())


  return (
    <div>
        <Top />
       
        <div >
    <div className="all-title-box">
      <div className={classes.text}>
        <h1> Program </h1>
      </div>
    </div>

    <div className={classes.pricingarea}>
      <div className="container">
        <div className="row">
    {programs.map(
    (program) => (
        <ProgramFee 
        id = {program.id}
        programName = {program.programName}
        programFee = {program.programFee}
      />
     


    )
  )
    }
    </div>
    </div>
      </div>


    </div>

  </div>
   
  )
}

export default ProgramFee1