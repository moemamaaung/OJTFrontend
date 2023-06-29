import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"
import { fecthExams,selectAllExams,getExamStatus,getExamError } from "./examSlice"
import ExamItems from "./ExamItems"

const ExamList = () => {

    const dispatch = useDispatch()

const exams = useSelector(selectAllExams)
const examStatus = useSelector(getExamStatus)
const examError = useSelector(getExamError)

useEffect(() => {
    if(examStatus === "idle")
    dispatch(fecthExams())
},[examStatus,dispatch])

let content;

if(examStatus === "loading"){
    content = <p>Loading...</p>
}

if(examStatus === "succeeded"){
    content = exams.map((exam) => ( 
        <ExamItems
            id = {exam.id}
            examType = {exam.examType}
         />
    ));
}

if(examStatus === "failed"){
    content = { examError }
}

  return content;
}

export default ExamList