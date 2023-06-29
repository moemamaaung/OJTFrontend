import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewExam } from "./examSlice";
import { useNavigate } from "react-router-dom";
import classes from "./CreateExamForm.module.css";

const CreateExamForm = () => {
  const [examType, setExamType] = useState(" ");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const navigate = useNavigate();

  const onExamTypeChange = (e) => setExamType(e.target.value);

  const canSave = [examType].every(Boolean) && addRequestStatus === "idle";

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    if (canSave) {
      try {
        setAddRequestStatus("pending");

        dispatch(
          addNewExam({
            examType,
          })
        );
      } catch (error) {
        console.log(error);
      } finally {
        setAddRequestStatus("idle");
      }

      setExamType(" ");

      navigate("/admin/examTable");
    }
  };

  return (
    <div className={classes.all}>
      <div className={classes.wrapper}>
        <h2>Create Exam Form</h2>
        <form onSubmit={onSubmit}>
          <div className={classes.row}>
            <div className={classes.col}>
              <div className={classes.col}>
                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <input
                      type="text"
                      name="examType"
                     
                      required
                      className={classes.name}
                      placeholder="ExamType"
                      value={examType}
                      onChange={onExamTypeChange}
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

export default CreateExamForm;
