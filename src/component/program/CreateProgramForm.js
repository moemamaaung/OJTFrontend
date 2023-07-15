import React from "react";
import classes from "../mark/CreateMarkForm.module.css";
import myclass from '../course/CreateCourseForm.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addNewProgram } from "./programSlices";
import { useNavigate } from "react-router-dom";
import { selectAllAcademicyears } from "../academicyear/academicyearSlices";

const CreateProgramForm = () => {
  const [programName, setProgramName] = useState("");
  const [programFee, setProgramFee] = useState("");
  const [ACADEMICYEAR_ID, setAcademicyearId] = useState("");

  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onProgramNameChange = (e) => setProgramName(e.target.value);
  const onProgramFeeChange = (e) => setProgramFee(e.target.value);
  const onAcademicIdChange = (e) => setAcademicyearId(e.target.value);

  const canSave =
    [programName, programFee].every(Boolean) && addRequestStatus === "idle";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();

    if (canSave) {
      try {
        setAddRequestStatus("pending");

        dispatch(
          addNewProgram({
            programName,
            programFee,
            ACADEMICYEAR_ID,
          })
        ).unwrap();
      } catch (error) {
        console.log(error);
      } finally {
        setAddRequestStatus("idle");
      }

      setProgramName("");
      setProgramFee("");

      navigate(`/admin/program`);
    }
  };
  const academicyears = useSelector(selectAllAcademicyears);

  return (
    <div className={classes.all}>
      <div className={classes.wrapper}>
        <h2>Create Program Form</h2>
        <form onSubmit={onSubmit}>
          <div className={classes.row}>
            <div className={classes.col}>
              <div className={classes.col}>
              <div className={myclass.inputGroup}>
                  <div className={myclass.inputBox}>
                    <select
                      className={myclass.name}
                      value={ACADEMICYEAR_ID}
                      onChange={onAcademicIdChange}
                    >
                      <option value="">Choose Academic Year</option>
                      {academicyears.map((year) => (
                        <option key={year.id} value={year.id}>
                          {year.value}
                        </option>
                      ))}
                      ;
                    </select>
                  </div>
                </div>
                
                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <input
                      type="text"
                      name="programName"
                      placeholder="Program Name"
                      required
                      className={classes.name}
                      value={programName}
                      onChange={onProgramNameChange}
                    />
                  </div>
                </div>

                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <input
                      type="text"
                      name="programFee"
                      placeholder="Program Fee"
                      required
                      className={classes.name}
                      value={programFee}
                      onChange={onProgramFeeChange}
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

export default CreateProgramForm;
