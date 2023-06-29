import { useParams } from "react-router-dom";
import { selectTeacherById } from "./teacherSlice";
import { useSelector } from "react-redux";

const TeacherBio = () => {

  const { teacherId } = useParams()
  console.log(teacherId)
  const teacher = useSelector((state) => selectTeacherById(state, teacherId))
  console.log(teacher)
  return (

    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" >
           
              <img className="img-fluid w-100" src={teacher.image} alt="" />
          
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h6 className="section-title bg-white text-start text-primary pe-3">Trainer</h6>
            <h1 className="mb-4">Saya <span className="text-primary">{teacher.name}</span></h1>
            <p className="mb-4 text-dark"> {teacher.bio}</p>
            <p className="mb-4 text-dark">Tempor erat elitr rebum at clita. </p>
            <div className="row mb-4">
              <div className="col-sm-6">
                <p className="mb-0 text-dark"><i className="fa fa-arrow-right text-primary me-2"></i>{teacher.qualify1}</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0 text-dark"><i className="fa fa-arrow-right text-primary me-2"></i>{teacher.qualify2}</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0 text-dark"><i className="fa fa-arrow-right text-primary me-2"></i>{teacher.qualify3}</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0 text-dark"><i className="fa fa-arrow-right text-primary me-2"></i>{teacher.qualify4}</p>
              </div>
           
            </div>
            <a className="btn btn-primary py-3 px-5 mt-2" href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default TeacherBio