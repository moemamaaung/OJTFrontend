

import classes from './Contact.module.css'
const Contact = () => {
  
  return (
<div className={classes.bg}>
    <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center">
        <h3 className="section-title text-center text-primary px-3">
          Contact Us
        </h3>
        <h1 className="mb-5">Contact For Any Query</h1>
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.8146509341314!2d96.08667497445998!3d21.9032120571728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30cb6d68c3d6f2ab%3A0x7af4dabf869eca9!2sHost%20Myanmar%20Institute(HMI)!5e0!3m2!1sen!2smm!4v1684430484750!5m2!1sen!2smm"
          className={classes.map}
          width="100%"
          height="350px"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>


      <div className="row">
        <div
          className="col-lg-6 "
         
        >
          <h3>Get In Touch</h3>
          <p className={classes.color}>
            Host Myanmar Institute , For Your Better Career and Brighter ,
            Contact to our school.
          </p>
          <div className="d-flex align-items-center mb-4">
            <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary icon">
              <i className="fa fa-map-marker-alt text-white"></i>
            </div>
            <div className="ms-3">
              <h5 className="text-primary">Office</h5>
              <p className={classes.color}>73A Street, Mandalay, Myanmar</p>
            </div>
          </div>
          <div className="d-flex align-items-center mb-4">
            <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary icon">
              <i className="fa fa-phone-alt text-white"></i>
            </div>
            <div className="ms-3">
              <h5 className="text-primary">Mobile</h5>
              <p className={classes.color}>+012 345 67890</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary icon">
              <i className="fa fa-envelope-open text-white"></i>
            </div>
            <div className="ms-3">
              <h5 className="text-primary">Email</h5>
              <p className={classes.color}>info@example.com</p>
            </div>
          </div>
        </div>

        <div
          className="col-lg-6 "
          
        >
          <form>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                   <label for="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                   <label for="email">Your Email</label>
                </div>
                <div className="div"></div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                       <label for="subject">Subject</label>
                    </div>

                    <div className="div"></div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                      ></textarea>
                       <label for="message">Message</label>
                    </div>
                    <div className="div"></div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          </div>
        </div>
        </div>
  );
};

export default Contact;
