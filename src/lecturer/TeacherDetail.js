import React from 'react'
import { selectLecturerById } from './lecturerSlice'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const TeacherDetail = () => {
    const { teacherId } = useParams()
    console.log(teacherId)
    const teacher = useSelector((state) => selectLecturerById(state, Number(teacherId))
  );
    console.log("Teacher Obj "+teacher)
    return (
  
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" >
             
                <img className="img-fluid w-100" src={teacher?.profile} alt="" />
            
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-primary pe-3">Trainer</h6>
              <h1 className="mb-4">Saya <span className="text-primary">{teacher?.name}</span></h1>
              <p className="mb-4 text-dark"> Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo dolores et sit ipsum rebum</p>
              <p className="mb-4 text-dark">Tempor erat elitr rebum at clita. </p>
              <div className="row mb-4">
                <div className="col-sm-6">
                  <p className="mb-0 text-dark"><i className="fa fa-arrow-right text-primary me-2"></i>{teacher?.qualification}</p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0 text-dark"><i className="fa fa-arrow-right text-primary me-2"></i>{teacher?.qualification}</p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0 text-dark"><i className="fa fa-arrow-right text-primary me-2"></i>{teacher?.qualification}</p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0 text-dark"><i className="fa fa-arrow-right text-primary me-2"></i>{teacher?.qualification}</p>
                </div>
             
              </div>
              <Link to='/teacher' className="btn btn-primary py-3 px-5 mt-2" href="#">Back</Link>
            </div>
          </div>
        </div>
      </div>
    )
      
}

export default TeacherDetail