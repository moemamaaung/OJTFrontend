import React, { useEffect } from "react";
import classes from "./CreateCourseForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addNewCourse, fetchCourses } from "./courseSlice";
import { useNavigate } from "react-router-dom";
import { fetchPrograms, selectAllPrograms } from "../program/programSlices";


const CreateCourseForm = () => {
  const [subject1, setSubject1] = useState("");
  const [subject2, setSubject2] = useState("");
  const [subject3, setSubject3] = useState("");
  const [subject4, setSubject4] = useState("");
  const [subject5, setSubject5] = useState("");
  const [subject6, setSubject6] = useState("");
  const [programId,setProgram] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
 

  const onSubject1Change = (e) => setSubject1(e.target.value);
  const onSubject2Change = (e) => setSubject2(e.target.value);
  const onSubject3Change = (e) => setSubject3(e.target.value);
  const onSubject4Change = (e) => setSubject4(e.target.value);
  const onSubject5Change = (e) => setSubject5(e.target.value);
  const onSubject6Change = (e) => setSubject6(e.target.value);
  const onProgramIdChange = (e) => setProgram(e.target.value);

  const canSave =
    [subject1, subject2,subject3,subject4,subject5,subject6].every(Boolean) && addRequestStatus === "idle";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const programs = useSelector(selectAllPrograms)
  useEffect(() => {
      dispatch(fetchPrograms())
      dispatch(fetchCourses())
      
    },[dispatch])

  const onSubmit = (event) => {
    event.preventDefault();

    if (canSave) {
      try {
        setAddRequestStatus("pending");
        
        dispatch(
          addNewCourse({
            subject1,
            subject2,
            subject3,
            subject4,
            subject5,
            subject6,
            programId
          })
        );
      } catch (error) {
        console.log(error);
      } finally {
        setAddRequestStatus("idle");
      }

      setSubject1("");
      setSubject2("");
      setSubject3("");
      setSubject4("")
      setSubject5("")
      setSubject6("")


      navigate('/admin')
    }
  };

  return (
    <div className={classes.all}>
      <div className={classes.wrapper}>
        <h2>Create Course Form</h2>
        <form onSubmit={onSubmit}>
          <div className={classes.row}>
            <div className={classes.col}>
              <div className={classes.col}>

              <div className={classes.inputGroup}>
                                <div className={classes.inputBox}>
                                    <select
                                        className={classes.name}
                                        value={programId}
                                        onChange={onProgramIdChange} >
                                        <option value="">Choose Program</option>
                                        {programs.map((a) =>

                                            <option key={a.id} value={a.id}>
                                                {a.programName}
                                            </option>

                                        )};

                                    </select>


                                </div>
                            </div>

                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <i className="fa fa-credit-card icon"></i>
                    <input
                      type="text"
                      name="subject1"
                      placeholder="Subject1"
                      required
                      className={classes.name}
                      value={subject1}
                      onChange={onSubject1Change}
                    />
                  </div>
                </div>

                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <i className="fa fa-credit-card icon"></i>
                    <input
                      type="text"
                      name="subject2"
                      placeholder="Subject2"
                      required
                      className={classes.name}
                      value={subject2}
                      onChange={onSubject2Change}
                    />
                  </div>
                </div>

                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <i className="fa fa-credit-card icon"></i>
                    <input
                      type="text"
                      name="subject3"
                      placeholder="Subject3"
                      required
                      className={classes.name}
                      value={subject3}
                      onChange={onSubject3Change}
                    />
                  </div>
                </div>

                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <i className="fa fa-credit-card icon"></i>
                    <input
                      type="text"
                      name="subject4"
                      placeholder="Subject4"
                      required
                      className={classes.name}
                      value={subject4}
                      onChange={onSubject4Change}
                    />
                  </div>
                </div>

                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <i className="fa fa-credit-card icon"></i>
                    <input
                      type="text"
                      name="subject5"
                      placeholder="Subject5"
                      required
                      className={classes.name}
                      value={subject5}
                      onChange={onSubject5Change}
                    />
                  </div>
                </div>

                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <i className="fa fa-credit-card icon"></i>
                    <input
                      type="text"
                      name="subject6"
                      placeholder="Subject6"
                      required
                      className={classes.name}
                      value={subject6}
                      onChange={onSubject6Change}
                    />
                  </div>
                </div>
              </div>

              <div className={classes.inputGroup}>
                <div className={classes.inputBox}>
                 
                    <button type="submit" className={classes.btn}>
                      Create
                    </button>
                  
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCourseForm;
