import React, { useEffect } from "react";
import classes from "./UpdatemarkForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { fetchMarks, selectMarkById, updateMarks } from "./markSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { fetchCourses, selectAllCourses, selectProgramCourseById} from "../course/courseSlice";
import { fecthExams , selectAllExams} from "../exam/examSlice";
import { fetchUsers, getUser } from "../features/user/userSlice";
import { selectAllPrograms } from "../program/programSlices";

const UpdateMarkForm = () => {
  const { markId } = useParams();
  const mark = useSelector((state) => selectMarkById(state, Number(markId)));
  console.log(mark)

  

  const text =` m-0  font-weight-bold   text-center ${classes.text}`

  const [id]= useState(mark.id)
  const [subject1Score, setSubject1Score] = useState(mark.subject1Score);
  const [subject2Score, setSubject2Score] = useState(mark.subject1Score);
  const [subject3Score, setSubject3Score] = useState(mark.subject1Score);
  const [subject4Score, setSubject4Score] = useState(mark.subject1Score);
  const [subject5Score, setSubject5Score] = useState(mark.subject1Score);
  const [subject6Score, setSubject6Score] = useState(mark.subject1Score);
  const [username,setUsername] = useState(mark.username);

  const [fullname,setFullname] = useState(mark.fullname);
  const [courseId, setCourseId] = useState(mark.course.program.id);
  // const [examId, setExamId] = useState(mark.exam.id);
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const navigate = useNavigate();


  const onSubject1Change = (e) => setSubject1Score(e.target.value);
  const onSubject2Change = (e) => setSubject2Score(e.target.value);
  const onSubject3Change = (e) => setSubject3Score(e.target.value);
  const onSubject4Change = (e) => setSubject4Score(e.target.value);
  const onSubject5Change = (e) => setSubject5Score(e.target.value);
  const onSubject6Change = (e) => setSubject6Score(e.target.value);
  const onFullnameChange = (e) => setFullname(e.target.value);
  const onCourseIdChange = (e) => setCourseId(e.target.value);
  const onUsernameChange = (e) => setUsername(e.target.value)

  // const onExamIdChange = (e) => setExamId(e.target.value);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fecthExams());
    dispatch(fetchMarks());
    dispatch(fetchUsers());
    dispatch(fetchCourses());

  }, [dispatch]);

  const exams = useSelector(selectAllExams);
  const programs = useSelector(selectAllPrograms)
  const users = useSelector(getUser)
  const course = useSelector(selectAllCourses)
  console.log(course)


  const cid = courseId

  console.log(cid)
 
  const courses1 = useSelector((state) => selectProgramCourseById(state,Number(courseId)))

  console.log(courses1)


  useEffect(() => {
    fetchCourses()
    fecthExams()
  }, []);

  const canSave = [id,subject1Score,courseId,username, subject2Score, subject3Score, subject4Score, subject5Score, subject6Score,fullname].every(Boolean) && addRequestStatus === "idle";

  const onSubmit = (event) => {
    event.preventDefault();

    if (canSave) {
      try {
        setAddRequestStatus("pending");

        dispatch(
          updateMarks({
            mark: {
              id,subject1Score, subject2Score,username,fullname, subject3Score, subject4Score, subject5Score, subject6Score
            },
            courseId
          })
        );
      } catch (error) {
        console.log(error);
      } finally {
        setAddRequestStatus("idle");
      }

      setSubject1Score('')
      setSubject2Score('')
      setSubject3Score('')
      setSubject4Score('')
      setSubject5Score('')
      setSubject6Score('')

      navigate('/admin/markTable' );
    }
  };

  return (
    <div className={classes.all}>
      <div className={classes.wrapper}>
        <h2>Update Mark Form</h2>
        <form onSubmit={onSubmit}>
          <div className={classes.row}>
            <div className={classes.col}>
            <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <div className="row">
                      <div className="col md-6">

                        <label>Name :</label>
                      </div>
                      <div className="col md-6">
                        <select
                          className={classes.name}
                          value={fullname}
                          onChange={onFullnameChange}
                        >
                          <option value="">Choose User </option>
                          {users.map((user) => (
                            <option >
                              {user?.fullname}
                            </option>
                          ))}
                        </select>
                      </div>

                    </div>

                  </div>
                </div>

                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <div className="row">
                      <div className="col md-6">

                        <label>UserName :</label>
                      </div>
                      <div className="col md-6">
                        <select
                          className={classes.name}
                          value={username}
                          onChange={onUsernameChange}
                          disabled
                        >
                          <option value="">Choose Username </option>
                          {users.map((user) => (
                            <option >
                              {user?.username}
                            </option>
                          ))}
                        </select>
                      </div>

                    </div>

                  </div>
                </div>

            

                {/* <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <div className="row">
                      <div className="col md-6">

                        <label>Exam Type :</label>
                      </div>
                      <div className="col md-6">
                        <select
                          className={classes.name}
                          value={examId}
                          onChange={onExamIdChange}
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
                </div> */}



                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <div className="row">
                      <div className="col md-6">

                        <label>Program Name :</label>
                      </div>
                      <div className="col md-6">
                        <select
                          className={classes.name}
                          value={courseId}
                          onChange={onCourseIdChange}
                          disabled
                        >
                          <option value="">Choose ProgramName </option>
                          {programs.map((program) => (
                            <option value={program.id} >
                              {program.programName}
                            </option>
                          ))}
                        </select>
                      </div>

                    </div>

                  </div>
                </div>



                <table class="table table-bordered mt-5">

                  <thead className={text}>
                    <tr>
                      <th>Subjects</th>
                      <th>Scores</th>

                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>{courses1?.subject1}</td>
                      <td> <input
                        type="text"
                        name='timetable'

                        required
                        value={subject1Score}
                        onChange={onSubject1Change}
                      /></td>
                    </tr>

                    <tr>
                      <td>{courses1?.subject2}</td>
                      <td><input
                        type="text"
                        name='timetable'

                        required
                        value={subject2Score}
                        onChange={onSubject2Change}
                      /></td>
                    </tr>
                    <tr>
                      <td>{courses1?.subject3}</td>
                      <td><input
                        type="text"
                        name='timetable'

                        required
                        value={subject3Score}
                        onChange={onSubject3Change}
                      /></td>
                    </tr>

                    <tr>
                      <td>{courses1?.subject4}</td>
                      <td><input
                        type="text"
                        name='timetable'

                        required
                        value={subject4Score}
                        onChange={onSubject4Change}
                      /></td>
                    </tr>

                    <tr>
                      <td>{courses1?.subject5}</td>
                      <td><input
                        type="text"
                        name='timetable'

                        required
                        value={subject5Score}
                        onChange={onSubject5Change}
                      /></td>
                    </tr>

                    <tr>
                      <td>{courses1?.subject6}</td>
                      <td><input
                        type="text"
                        name='timetable'

                        required
                        value={subject6Score}
                        onChange={onSubject6Change}
                      /></td>
                    </tr>
                  </tbody>
                </table>
              

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