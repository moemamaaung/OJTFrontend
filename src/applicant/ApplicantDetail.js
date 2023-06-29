import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { selectApplicantById } from './applicantSlice'
import classes from './ApplicantDetail.module.css'

const ApplicantDetail = () => {

  const { applicantId } = useParams()
  console.log(applicantId)
  const applicant = useSelector((state) => selectApplicantById(state, Number(applicantId)))
  console.log(applicant)

  console.log(applicant.edu.startDate)
  return (
    <div className={classes.all}>
      <div className={classes.wrapper}>
        <h2>{applicant.name}</h2>
        <div className={classes.row}>
          <div className={classes.col}>

            <div className={classes.col}>
              <div className={classes.inputGroup}>
                University StartDate : {applicant.edu.startDate}
              </div>

              <div className={classes.inputGroup}>
                <div className={classes.inputBox}>
                  University End Date : {applicant.edu.endDate}
                </div>
              </div>

              <div className={classes.inputGroup}>
                <div className={classes.inputBox}>
                  Street : {applicant.street}
                </div>
              </div>

              <div className={classes.inputGroup}>
                <div className={classes.inputBox}>
                  Township : {applicant.township}
                </div>
              </div>

              <div className={classes.inputGroup}>
                <div className={classes.inputBox}>
                  City : {applicant.city}
                </div>
              </div>

              <div className={classes.inputGroup}>
                <div className={classes.inputBox}>
                  Position : {applicant.exp.position}
                </div>
              </div>

              <div className={classes.inputGroup}>
                <div className={classes.inputBox}>
                  Company : {applicant.exp.company}
                </div>
              </div>

              <div className={classes.inputGroup}>
                <div className={classes.inputBox}>
                  Job StartDate : {applicant.exp.startDate}
                </div>
              </div>

              <div className={classes.inputGroup}>
                <div className={classes.inputBox}>
                  Job EndDate : {applicant.exp.endDate}
                </div>
              </div>

            </div>

            <div className={classes.inputGroup}>
              <div className={classes.inputBox}>
                <button type="submit" className={classes.btn}>
                  <Link to="/admin/all">Back</Link>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default ApplicantDetail