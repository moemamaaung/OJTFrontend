import React from 'react'
import classes from './TeacherItem.module.css'
import { Link } from 'react-router-dom'
const TeacherItem = (props) => {
  return (
    <div class="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.3s">

            <div className={classes.ourteam}>
                <div className={classes.teamimg}>
                    <Link to={`/${props.id}`}><img src={props.profile} />
                        <div class={classes.social}>
                            <ul>

                                <li><a href="#" className='fab fa-facebook-square'></a></li>
                                <li><a href="#" className="fab fa-twitter"></a></li>
                                <li><a href="#" className="fab fa-linkedin-in"></a></li>
                                <li><a href="#" className="fab fa-skype"></a></li>
                            </ul>
                        </div>
                    </Link>
                </div>
                <div class={classes.teamcontent}>

                    <h5 class="title fw-bold">{props.name}</h5>
                    <span class="post">{props.qualification}</span>
                </div>
            </div>

        </div>
  )
}

export default TeacherItem