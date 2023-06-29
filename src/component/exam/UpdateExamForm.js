import React from "react";
import classes from "./UpdateExamForm.module.css"
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { selectExamById, updateExam } from "./examSlice";

const UpdateExamForm = () => {
  const { examId } = useParams();
  const exam = useSelector((state) => selectExamById(state, Number(examId)));
  const navigate = useNavigate();

  const [id, setId] = useState(exam?.id);
  const [examType, setExamType] = useState(exam?.examType);
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onExamTypeChange = (e) => setExamType(e.target.value);

  const canSave = [id, examType].every(Boolean) && addRequestStatus === ("idle");

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    if (canSave) {
      try {
        setAddRequestStatus("pending");

        dispatch(
          updateExam({
            id,
            examType,
          })
        );
      } catch (error) {
        console.log(error);
      } finally {
        setAddRequestStatus("idle");
      }

      setId(" ");
      setExamType(" ");

      navigate("/examTable");
    }
  };

  return (
    <div className={classes.all}>
      <div className={classes.wrapper}>
        <h2>Update Exam Form</h2>
        <form onSubmit={onSubmit}>
          <div className={classes.row}>
            <div className={classes.col}>
              <div className={classes.col}>
                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <input
                      type="text"
                      name="examType"
                      placeholder="Enter Exam Type"
                      required
                      className={classes.name}
                      value={examType}
                      onChange={onExamTypeChange}
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

export default UpdateExamForm;
