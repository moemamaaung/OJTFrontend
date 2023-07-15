import React from 'react'
import { selectMarkById } from './markSlice'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import classes from '../program/CreateProgramForm.module.css'

const MarkDetail = (props) => {

    console.log(props)
    const t = `table table-striped  table-bordered mt-1 w-50 mt-4 ${classes.t}`
    const p = `text-center  `
    const text = `m-0  font-weight-bold  ${classes.text}`
    const { markId } = useParams()
    console.log(markId)
    const mark = useSelector((state) => selectMarkById(state, Number(markId)))
    console.log(mark)

    const { subject1Score, subject2Score, subject3Score, subject4Score,subject5Score,subject6Score } = mark;

    const calculateSum = () => {
      const sum = subject1Score + subject2Score + subject3Score + subject4Score+subject5Score+subject6Score ;
      return sum;
    };
  
  return (

    <div>
                <div className={classes.inputGroup}>
                            <div className={classes.inputBox}>
                            <h4 className='ms-5 mt-4'> Name : {mark.fullname} </h4>
                          
                            </div>
                      
                        </div>
        <table class={t}>

            <thead className={text}>
                <tr>
                    <th className='text-center'>Subject</th>
                    <th className='text-center'>Scores</th>
                </tr>
            </thead>
<tbody>

           <tr>
                   <td className={p}>{mark.course.subject1}</td>
                    <td className={p}>{mark.subject1Score}</td>
                    </tr>
                   <tr>
                    <td className={p}>{mark.course.subject2}</td>
                    <td className={p}>{mark.subject2Score}</td>
                    </tr>
              <tr>
                    <td className={p}>{mark.course.subject3}</td>
                    <td className={p}>{mark.subject3Score}</td>
                    </tr>

                    <tr>
                   <td className={p}>{mark.course.subject4}</td>
                    <td className={p}>{mark.subject4Score}</td>
                    </tr>
                   <tr>
                    <td className={p}>{mark.course.subject5}</td>
                    <td className={p}>{mark.subject5Score}</td>
                    </tr>
               
                   <tr>
                   <td className={p}>{mark.course.subject6}</td>
                   <td className={p}>{mark.subject6Score}</td>
                   </tr>
              
                   <tr>
                   <td className='text-center font-weight-bold' >Total</td>
                   <td className='text-center'>{calculateSum()}</td>
                   </tr>
                   </tbody>
             

        </table>
        <button type="submit" className={classes.btn2}>
                  <Link to="/admin/markTable" style={{textDecoration : 'none'}}>Back</Link>
                </button>
        </div>
  )
}

export default MarkDetail