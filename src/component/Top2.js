
import program from '../images/banner.jpg'
import classes from '../component/Top.module.css'
const Top2 = () => {
    const height = `d-block ${classes.height}`
    
    const programFee = `display-1 text-white md-4 ${classes.programFee}`
  return (
    <div>
     <img src={program} className={height} alt=''/>
                <div className="carousel-item active">
                <div className="carousel-caption d-flex align-items justify-content-center">
                    <h1 className={programFee}>TeacherList</h1>
                </div>
            </div>
    
    </div>
  )
}

export default Top2