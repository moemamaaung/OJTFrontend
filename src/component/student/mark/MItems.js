import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import classes from '../../program/CreateProgramForm.module.css'
import { deletemarks } from '../../mark/markSlice'
import ConfirmModal from '../../utility/ConfirmModal'

const MItems = (props) => {
    const text = `m-0  font-weight-bold  ${classes.text}`
    const t = `table table-striped  table-bordered mt-1 w-50 mt-4 ${classes.t}`
    const p = `text-center  `
    console.log(props)
    const dispatch = useDispatch()


  
    const { subject1Score, subject2Score, subject3Score, subject4Score,subject5Score,subject6Score } = props;
  
    const calculateSum = () => {
      const sum = subject1Score + subject2Score + subject3Score + subject4Score+subject5Score+subject6Score ;
      return sum;
    };
  
  
  return (
    <div class="container mt-5">
   
            <div className={classes.wrapper}>
<h1 className='text-center mb-5'>Mark List</h1>
            <div className={classes.col}>
          
               <div className={classes.inputGroup}>
                           <div className={classes.inputBox}>
                           <h4 > Name : {props.fullname} </h4>
                          
                           </div>
                      
                       </div>
                       </div>

                       <div className={classes.col}>
          
          {/* <div className={classes.inputGroup}>
                      <div className={classes.inputBox}>
                      <h4> Username : {props.username} </h4>
                     
                      </div>
                 
                  </div> */}

                  </div>

       

                        {/* <div className={classes.col}>
              
                <div className={classes.inputGroup}>
                            <div className={classes.inputBox}>
                            
                     <h4>Exam Type : {props.exam?.examType} </h4>

                            </div>
                        </div>
                        </div> */}

                        {/* <div className={classes.col}>
              
              <div className={classes.inputGroup}>
                          <div className={classes.inputBox}>
                          
                   <h4>Exam Type : {props.program?.programName} </h4>

                          </div>
                      </div>
                      </div> */}
                       

                      

        <table class={t}>

            <thead className={text}>
                <tr>
                    <th className='text-center'>Subject</th>
                    <th className='text-center'>Scores</th>
                </tr>
            </thead>


            <tbody>
                <tr>
                   <td className={p}>{props.course?.subject1}</td>
                    <td className={p}>{props.subject1Score}</td>
                 </tr>
                <tr>
                   
                    <td className={p}>{props.course?.subject2}</td>
                    <td className={p}>{props.subject2Score}</td>
                    
                </tr>
                <tr>
                    <td className={p}>{props.course?.subject3}</td>
                    <td className={p}>{props.subject3Score}</td>
                   </tr>
                <tr>
                   <td className={p}>{props.course?.subject4}</td>
                    <td className={p}>{props.subject4Score}</td>
                    </tr>
                <tr>
                   
                    <td className={p}>{props.course?.subject5}</td>
                    <td className={p}>{props.subject5Score}</td>
                  
                </tr>

                <tr>
                   
                   <td className={p}>{props.course?.subject6}</td>
                   <td className={p}>{props.subject6Score}</td>
                 
               </tr>

               <tr>
                   
                   <td className='text-center font-weight-bold' >Total</td>
                   <td className='text-center'>{calculateSum()}</td>
                 
               </tr>
            </tbody>

        </table>
          
            </div>
        </div>
  )
}

export default MItems