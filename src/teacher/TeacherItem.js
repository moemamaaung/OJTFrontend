import { Link } from 'react-router-dom'
import classes from './TeacherItem.module.css'


const TeacherItem = (props) => {
    return (
        <div class="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.3s">

            <div className={classes.ourteam}>
                <div className={classes.teamimg}>
                    <Link to={`/${props.id}`}><img src={props.image} />
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

                    <h3 class="title">{props.name}</h3>
                    <span class="post">{props.subject}</span>
                </div>
            </div>

        </div>
    )
}

export default TeacherItem