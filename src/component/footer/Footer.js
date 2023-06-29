import img1 from '../../images/a.jpg'
import img2 from '../../images/n4.jpg'
import img3 from '../../images/c3.jpg'
import img4 from '../../images/j2.jpg'
import img5 from '../../images/se1.jpg'
import img6 from '../../images/sql.jpg'
import Marquee from 'react-fast-marquee'
import classes from './Footer.module.css'
const Footer = () => {
    const background = `marque-wrapper home-wrapper-2 py-3 ${classes.bimg}`
    const widget = `clearfix ${classes.widget}`
    return (
        <div>
            <div className={background}>
                <div className="row">
                    <div className="col-12">
                        <div className="marquee-inner-wrapper card-wrapper">
                            <Marquee className="d-flex">
                                <div className="mx-4 w-25">
                                    <img src={img1} className={classes.image} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={img2} className={classes.image} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={img3} className={classes.image} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={img4} className={classes.image} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={img5} className={classes.image} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={img6} className={classes.image} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={img5} className={classes.image} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={img6} className={classes.image} alt="brand" />
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>

            <footer className={classes.footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-xs-12">
                            <div className={widget}>
                                <div className={classes.widgettitle}>
                                    <h3>About US</h3>
                                </div>
                                <p> The ITPEC Fundamental Information Technology Engineer Examination (ITPEC FE Exam) is loosely based on the Japan Information Technology Fundamental IT Engineers Examination translated in English, Thai, Vietnamese, Mongol, and Burmese.</p>
                                <div className={classes.footerright}>
                                    <ul className={classes.footerlinkssoi}>
                                        <li><a href="#" className='fab fa-facebook-square'></a></li>&nbsp;
                                        <li><a href="#" className="fab fa-twitter"></a></li>&nbsp;
                                        <li><a href="#" className="fab fa-linkedin-in"></a></li>&nbsp;
                                        <li><a href="#" className="fab fa-skype"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-xs-12">
                            <div className={widget}>
                                <div className={classes.widgettitle}>
                                    <h3>Information Link</h3>
                                </div>
                                <ul className={classes.footerlinks}>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Program Fee</a></li>
                                    <li><a href="#">Teacher</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-xs-12">
                            <div className={widget}>
                                <div className={classes.widgettitle}>
                                    <h3>Contact Details</h3>
                                </div>

                                <ul className={classes.footerlinks}>

                                    <li><a href="https://www.facebook.com/hmmi.2022/">info@yoursite.com</a></li>
                                    <li><a href="https://www.facebook.com/hmmi.2022/">https://www.facebook.com/hmmi.2022/</a></li>
                                    <li>Room 64,65, Tower 11, Garden City, 74th Street</li>
                                    <li>Mandalay,Myanmar</li>
                                    <li>+959 40406 0366</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
            <div className={classes.copyrights}>
                <div className="container">
                    <div className={classes.footerdistributed}>
                        <div className={classes.footercenter}>
                            <p className={classes.footercompanyname}>All Rights Reserved. &copy; 2023 <span>HMI</span> Design By :  <span>Java Job Ready Batch-2</span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer