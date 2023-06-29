
import classes from './Report.module.css'
const Report = () => {
    const card = `row text-left  ${classes.cl}`
    const card1 = `col-md-4 col-sm-4 text-align-center ${classes.card1}`
    const idesign1 =`fas fa-book-reader fa-8x ${classes.idesign}`
    const idesign2 =`fas fa-tasks fa-8x ${classes.idesign}`
    const idesign3 = `far fa-calendar-alt fa-8x ${classes.idesign}`

  return (
    <section>
           
            <div className="card">
                <div className={card}>
                <div className={card1}>
                        <div className='row'>
                            <span className="col-md-3 global-radius"><i className={idesign1}></i></span>
                            <span className='col-md-6'>
                                <h3>120000</h3>
                                <h4>Students</h4>
                            </span>
                        </div>
                    </div>


                    <div className={card1}>
                        <div className='row'>
                            <span className="col-md-3 global-radius"><i className={idesign2}></i></span>
                            <span className='col-md-6'>
                                <h3>240</h3>
                                <h4>Courses</h4>
                            </span>
                        </div>
                    </div>

                    <div className={card1}>
                        <div className='row'>
                            <span className="col-md-3 global-radius"><i className={idesign3}></i></span>
                            <span className='col-md-6'>
                                <h3>55</h3>
                                <h4>Years Completed</h4>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Report