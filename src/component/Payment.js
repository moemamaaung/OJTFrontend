import classes from './Payment.module.css'
import img from '../images/card_img.png'

const Payment = () => {
    const name = `fa fa-user icon ${classes.name}`
    return (

        <div className={classes.all}>
            <div className={classes.wrapper}>

            
                <h2>Payment Form</h2>
                <form action=''>
                <div className={classes.row}>

        <div className={classes.col}>

              
                    <h4>Account</h4>
                    <div className={classes.inputGroup}>
                        <div className={classes.inputBox}>
                            <i className="fa fa-user icon"></i>
                            <input type="text" placeholder="Full Name" required className={name} />

                        </div>
                        <div className={classes.inputBox}>
                            <i className="fa fa-user icon"></i>
                            <input type="text" placeholder="Nick Name" required className={name} />

                        </div>
                    </div>
                    <div className={classes.inputGroup}>
                        <div className={classes.inputBox}>
                            <i className="fa fa-envelope icon"></i>
                            <input type="email" placeholder="Email Adress" required className={name} />

                        </div>
                       
                    </div>
                    <div className={classes.inputGroup}>
                        <div className={classes.inputBox}>
                            <h6> Date of Birth</h6>
                            <input type="text" placeholder="DD" className={classes.dob} />
                            <input type="text" placeholder="MM" className={classes.dob} />
                            <input type="text" placeholder="YYYY" className={classes.dob} />
                        </div>
                        <div className={classes.inputBox}>
                            <h6> Gender</h6>
                            <input type="radio" id="b1" name="gendar" checked className={classes.radio} />
                            <label for="b1">Male</label>
                            <input type="radio" id="b2" name="gendar" className={classes.radio} />
                            <label for="b2">Female</label>
                        </div>
                    
                    </div>
                    <div className={classes.col}>
                    <div className={classes.inputGroup}>
                        <div className={classes.inputBox}>
                    <h4>Payment Details</h4>
                   
                            <input type="radio" name="pay" id="bc1" checked className={classes.radio} />
                            <label for="bc1"><span><i className="fa fa-cc-visa"></i> Credit Card</span></label>
                            <input type="radio" name="pay" id="bc2" className={classes.radio} />
                            <label for="bc2"><span><i className="fa fa-cc-paypal"></i> KBZPay</span></label>
                        </div>
                   </div>
                   
                    <div className={classes.inputGroup}> 
                        <div className={classes.inputBox}>
                            <i className="fa fa-credit-card icon"></i>
                            <input type="tel" placeholder="Card Number" required className={classes.name} />

                        </div>
                    </div>
                    
                    
                    <div className={classes.inputGroup}>
                        <div className={classes.inputBox}>
                            <i className="fa fa-user icon"></i>
                            <input type="tel" placeholder="Card CVC" required className={classes.name} />

                        </div>
                        </div>
                        <div className={classes.inputGroup}> 
                        <div className={classes.inputBox1}>
                        <h6> Installment</h6>
                        <select>
                                <option >1st installment</option>
                                <option>2nd installment</option>
                               
                              
                            </select>

                        </div>

                        <div className={classes.inputBox}>
                        <h6> Date</h6>
                       
                            <input type='date' className={classes.name} />
                        </div>
                    </div>
                    </div>
                    
                    <div className={classes.inputGroup}>
                        <div className={classes.inputBox}>
                            <button type="submit">PAY NOW</button>
                        </div>
                    </div></div>
                    
</div>
            
            </form>

        </div>
        </div>
           )
        }
        
        export default Payment
       
 
/* //next */
        /* <div className={classes.main}>
<div className={classes.container}>

<form action="">
<h3>Payment Form</h3>
    <div className={classes.row}>

        <div className={classes.col}>

           

            <div className={classes.inputBox}>
                                 <i className="fa fa-user icon "></i>
                            <input type="text" placeholder="Full Name" required className={name} />
            </div>
            <div className={classes.inputBox}>
            <i className="fa fa-envelope-open "></i>
                <input type="email" placeholder="example@example.com"/>
            </div>
            <div className={classes.inputBox}>
            <i className="fa fa-map-marker-alt me-2"></i>
                <input type="text" placeholder="room - street - locality"/>
            </div>
            <div className={classes.inputBox}>
                <span>city :</span>
                <input type="text" placeholder="mumbai"/>
            </div>
                             <div className={classes.inputBox}>
                             <h4> Gender</h4>
                             <input type="radio" id="b1" name="gendar" checked className={classes.radio} />
                             <label for="b1">Male</label>
                             <input type="radio" id="b2" name="gendar" className={classes.radio} />
                             <label for="b2">Female</label>
                         </div>

            <div className={classes.flex}>
                <div className={classes.inputBox}>
                    <span>state :</span>
                    <input type="text" placeholder="india"/>
                </div>
                <div className={classes.inputBox}>
                    <span>zip code :</span>
                    <input type="text" placeholder="123 456"/>
                </div>
            </div>

        </div>
        </div>

        <div className={classes.col}>

            <div className={classes.inputBox}>
                <span>cards accepted :</span>
                <img src={img} alt=""/>
            </div>
            <div className={classes.inputBox}>
                <span>name on card :</span>
                <input type="text" placeholder="mr. john deo"/>
            </div>
            <div className={classes.inputBox}>
                <span>credit card number :</span>
                <input type="number" placeholder="1111-2222-3333-4444"/>
            </div>
            <div className={classes.inputBox}>
                <span>exp month :</span>
                <input type="text" placeholder="january"/>
            </div>

            <div className={classes.flex}>
                <div className={classes.inputBox}>
                    <span>exp year :</span>
                    <input type="number" placeholder="2022"/>
                </div>
                <div className={classes.inputBox}>
                    <span>CVV :</span>
                    <input type="text" placeholder="1234"/>
                </div>
            </div>

        </div>

    
    </div>

    <input type="submit" value="proceed to checkout" className={classes.submitBtn}/>

</form>

</div>    */ 





 