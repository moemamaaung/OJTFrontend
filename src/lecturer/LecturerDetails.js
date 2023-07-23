import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import classes from "../applicant/ApplicantDetail.module.css";
import { selectLecturerById } from "./lecturerSlice";

const LecturerDetails = () => {
  const { lecturerId } = useParams();
  console.log(lecturerId);
  const lecturer = useSelector((state) =>
    selectLecturerById(state, Number(lecturerId))
  );
  console.log(lecturer);
  return (
    <div className={classes.all}>
      <div className={classes.wrapper}>
        <h2>{lecturer.name}</h2>
        <div className={classes.row}>
          <div className={classes.col}>
            <div className={classes.col}>
            <div className={classes.inputGroup}>
                Gender : {lecturer.gender}
              </div>
              <div className={classes.inputGroup}>
                Email : {lecturer.email}
              </div>
              <div className={classes.inputGroup}>
                PhoneNo : {lecturer.phoneNo}
              </div>
              <div className={classes.inputGroup}>
               Age : {lecturer.age}
              </div>

              <div className={classes.inputGroup}>
                <div className={classes.inputBox}>
                 Address : {lecturer.address}
                </div>
              </div>

              <div className={classes.inputGroup}>
                <div className={classes.inputBox}>
                 Qualification  : {lecturer.qualification}
                </div>
              </div>
</div>
       
            <div className={classes.inputGroup}>
              <div className={classes.inputBox}>
                <button type="submit" className={classes.btn}>
                  <Link to="/admin/all" style={{ textDecoration: "none" }}>
                    Back
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturerDetails;
