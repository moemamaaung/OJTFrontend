import TeacherList from "./TeacherList"
import classes from '../teacher/TeacherList.module.css'


const TeacherListCard = () => {

  return (
<div>
<div className="all-title-box">
        <div className={classes.text}>
          <h1>
            TeacherList          
          </h1>
        </div>
      </div>
    <div className="mt-4 mb-4">
    <div id="teachers" class="section wb">
      <div class="container">
        <div class="row">
          <TeacherList />
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default TeacherListCard