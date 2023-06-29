import React, { useEffect } from "react";
import classes from "./UpdatemarkForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { selectMarkById, updateMarks } from "./markSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { fetchCourses, selectAllCourses} from "../course/courseSlice";
import { fecthExams , selectAllExams} from "../exam/examSlice";

const UpdateMarkForm = () => {
  const { markId } = useParams();
  const mark = useSelector((state) => selectMarkById(state, Number(markId)));

  const navigate = useNavigate();

  const [id, setId] = useState(mark?.id);
  const [totalScores, setTotalScores] = useState(mark?.totalScores);
  const [courseId,setCourseId] = useState(mark?.course.id);
  const [examId,setExamId] = useState(mark?.exam.id);
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onTotalScoresChange = (e) => setTotalScores(e.target.value);
  const onSubjectNameChange = (e) => setCourseId(e.target.value);
  const onExamTypeChange = (e) => setExamId(e.target.value);

  const canSave =
    [id, totalScores].every(Boolean) && addRequestStatus === "idle";

  const dispatch = useDispatch();
  const courses = useSelector(selectAllCourses);
  const exams = useSelector(selectAllExams);
  useEffect(()=>{
    fetchCourses()
    fecthExams()
  },[])

  const onSubmit = (event) => {
    event.preventDefault();

    if (canSave) {
      try {
        setAddRequestStatus("pending");

        dispatch(
          updateMarks({
            mark : {
            id,
            totalScores,
            },courseId,examId
          })
        ).unwrap();
      } catch (error) {
        console.log(error);
      } finally {
        setAddRequestStatus("idle");
      }

      setId("");
      setTotalScores("");
      navigate("/markTable");
    }
  };

  return (
    <div className={classes.all}>
      <div className={classes.wrapper}>
        <h2>Update Mark Form</h2>
        <form onSubmit={onSubmit}>
          <div className={classes.row}>
            <div className={classes.col}>
              <div className={classes.col}>
                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <input
                      type="number"
                      placeholder="Total Scores"
                      required
                      className={classes.name}
                      value={totalScores}
                      onChange={onTotalScoresChange}
                    />
                  </div>
                </div>

                <div className={classes.inputGroup}>
                <div className={classes.inputBox}>
                  <select
                    id="courseId"
                    value={courseId}
                    onChange={onSubjectNameChange}
                  >
                    <option value="">Choose Subject Name</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.subjectName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={classes.inputGroup}>
                <div className={classes.inputBox}>
                  <select
                    id="examId"
                    value={examId}
                    onChange={onExamTypeChange}
                  >
                    <option value="">Choose Exam Type</option>
                    {exams.map((exam) => (
                      <option key={exam.id} value={exam.id}>
                        {exam.examType}
                      </option>
                    ))}
                  </select>
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

export default UpdateMarkForm;
