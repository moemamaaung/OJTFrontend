import React from "react";
import classes from "./CreateCourseForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { selectCourseById, updateCourse } from "./courseSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { selectAllPrograms } from "../program/programSlices";

const UpdateCourseForm = () => {
  const { courseId } = useParams();
  const course = useSelector((state) =>
    selectCourseById(state, Number(courseId))
  );
  const navigate = useNavigate();

  const [id, setId] = useState(course?.id);
  const [subject1, setSubject1] = useState(course?.subject1);
  const [subject2, setSubject2] = useState(course?.subject2);
  const [subject3, setSubject3] = useState(course?.subject3);
  const [subject4, setSubject4] = useState(course?.subject4);
  const [subject5, setSubject5] = useState(course?.subject5);
  const [subject6, setSubject6] = useState(course?.subject6);
  const [programId, setProgram] = useState(course?.program.id)
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onProgramIdChange = e=> setProgram(e.target.value)
  const onSubject1Change = (e) => setSubject1(e.target.value);
  const onSubject2Change = (e) => setSubject2(e.target.value);
  const onSubject3Change = (e) => setSubject3(e.target.value);
  const onSubject4Change = (e) => setSubject4(e.target.value);
  const onSubject5Change = (e) => setSubject5(e.target.value);
  const onSubject6Change = (e) => setSubject6(e.target.value);
 

  const canSave =
    [id,subject1, subject2,subject3,subject4,subject5,subject6].every(Boolean) &&
    addRequestStatus === "idle";

  const dispatch = useDispatch();
  const programs = useSelector(selectAllPrograms)
  const onSubmit = (event) => {
    event.preventDefault();

    if (canSave) {
      try {
        setAddRequestStatus("pending");

        dispatch(
          updateCourse({
            id,
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

      setId("");
      setSubject1("");
      setSubject2("");
      setSubject3("");
      setSubject4("")
      setSubject5("")
      setSubject6("")
      navigate("/admin/courseTable");
    }
  };

  return (
    <div className={classes.all}>
      <div className={classes.wrapper}>
        <h2>Update Course Form</h2>
        <form onSubmit={onSubmit}>
          <div className={classes.row}>
            <div className={classes.col}>
              <div className={classes.col}>

              <div className={classes.inputGroup}>
                                <div className={classes.inputBox}>
                                    <select
                                        className={classes.name}
                                        value={programId}
                                        onChange={onProgramIdChange}>
                                        
                                       
                                        <option value="">Choose Program</option>
                                        {programs.map((p) =>

                                            <option key={p.id} value={p.id}>
                                                {p.programName}
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
                    Update
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

export default UpdateCourseForm;
