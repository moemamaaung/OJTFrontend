
import classes from './Abouts.module.css'
import Card from "./ui/Card";
import img1 from '../images/hmi.jpg'
import img2 from '../images/it_05.jpg'
import img3 from '../images/it_01.jpg'

const Abouts = () => {
  const height = `d-block ${classes.height}`
  const programFee = `display-1 text-white md-4 ${classes.programFee}`
  return (
<Card>
    <div>
    

      <div className="all-title-box">
        <div className={classes.text}>
          <h1>
           Home / About Us             
          </h1>
        </div>
      </div>


      <div id="overviews" className="section lb">
        <div className="container-fluid">


        <div  >
        <video src="video/hmi.mp4" type="video/mp4" className={classes.vd} autoPlay loop muted controls />
        </div>
        

          <div className="section-title row text-center">
            <div className="col-md-8 offset-md-2">
            
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div  data-aos="fade-right">
                <span className={classes.msg}>
                1.𝐇𝐨𝐬𝐭 𝐌𝐲𝐚𝐧𝐦𝐚𝐫 𝐈𝐓 𝐒𝐨𝐥𝐮𝐭𝐢𝐨𝐧𝐬(𝐇𝐌)
                </span> <br /><br />
                
                Host Myanmar Company Limited သည် 2014 ခုနှစ်မှ စတင်ကာ IT
                နည်းပညာကိုအသုံးပြုပြီး လုပ်ငန်းရှင်များအတွက် ရပ်တည်ပေးနေသော{" "}
                <br />
                Software Solutions Company တစ်ခုဖြစ်ပါသည်။ လက်ရှိအချိန်ထိ
                လုပ်ငန်းရှင်ပေါင်း (၁၀၀)ကျော်နှင့်
                ပူးပေါင်းလုပ်ကိုင်လျက်ရှိပါသည်။ <br />
                လုပ်ငန်းရှင်များအတွက် IT လုပ်ငန်းများဖြစ်သည့် Website လိပ်စာများ
                ဝယ်ယူခြင်း၊ Website များ တည်ဆောက်ပေးခြင်း၊
                Emailများတည်ဆောက်ပေးခြင်း၊ <br />
                Serverများ တည်ဆောက်ပေးခြင်း လုပ်ငန်းရှင်များ
                စိတ်ကြိုက်အသုံးပြုနိုင်သည့် Software များ ရေးသားပေးခြင်း၊
                Network များ နှင့် <br />
                လုံခြုံရေးစနစ် CCTV များ တပ်ဆင်ခြင်း စသည့် လုပ်ငန်းများကို
                ယခုအချိန်ထိ လုပ်ကိုင်ပေးလျှက်ရှိပါသည်။
                
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" >
              <div className="post-media wow fadeIn" data-aos="fade-left">
                <img
                  src={img1}
                  alt=""
                  className={classes.img}
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="post-media wow fadeIn" data-aos="fade-right">
                <img
                  src={img2}
                  alt=""
                  className={classes.img}
                />
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="message-box" data-aos="fade-left">
              <span className={classes.msg}>
                2. 𝐇𝐨𝐬𝐭 𝐌𝐲𝐚𝐧𝐦𝐚𝐫-𝐌𝐚𝐧𝐝𝐚𝐥𝐚𝐲 𝐓𝐞𝐜𝐡 𝐒𝐩𝐚𝐜𝐞 (𝐇𝐌𝐌)
                </span> <br /><br />

                HM IT Solutions(Ygn)မှ တဆင့် IT လုပ်ငန်းခွင်ဝင်မည့်သူများအတွက်
                လုပ်ငန်းခွင်သို့ မဝင်မှီ လုပ်ငန်းခွင်အကြို လေ့လာမှုများ
                အလုပ်သင်အတွေ့အကြုံများရရှိပါက <br />
                ပိုမိုယုံကြည်မှုရရှိစေရန် ရည်ရွယ်ချက်ဖြင့် HMM ကို ၂၀၂၀ ခုနှစ်မှ
                စတင်ကာ Mandalayမြို့ တွင် တည်ထောင်ခဲ့သည်။ HMM သည်
                အိုင်တီအင်ဂျင်နီယာအဖြစ် <br />
                အသက်မွေးဝမ်းကြောင်းပြုမည့် လူငယ်များ၏ အိပ်မက်ကို
                ဖော်ဆောင်နိုင်ရန်အတွက် လိုအပ်သော On Job Training Courses များကို
                လေ့ကျင့်ပေးနေသော <br />
                နေရာတစ်ခုဖြစ်ပါသည်။ Software Engineering လုပ်ငန်းခွင်နယ်ပယ်တွင်
                မသိမဖြစ် လိုအပ်သော အရာများကို အခြေခံကာ အတွေ့အကြုံရှိသော <br />
                Trainer များမှ OJT course များကို ဖွဲ့စည်းထားပြီး ယခုအချိန်ထိ
                စနစ်တကျ လေ့ကျင့်သင်ကြားပေးနေလျှက်ရှိပါသည်။ <br />
                
                #hmi 
                #host_myanmar_institute 
                #itpecexam 
                #japaneselanguage <br></br>
                
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="message-box" data-aos="fade-right">
              <span className={classes.msg}>
                3. 𝐇𝐨𝐬𝐭 𝐌𝐲𝐚𝐧𝐦𝐚𝐫 𝐈𝐧𝐬𝐭𝐢𝐭𝐮𝐭𝐞(𝐇𝐌𝐈) 
                </span><br /><br />
                HMM မှ တဆင့် Host Myanmar Institute (HMI) တည်ထောင်ရခြင်းသည်
                လူငယ်များရဲ့ အနာဂတ်ကို ပုံဖော်ရာတွင် ပိုမိုတောက်ပလာစေရန် <br />
                ရည်ရွယ်ချက်ဖြင့် အာရှနိုင်ငံ (၇) နိုင်ငံ အသိအမှတ်ပြု ITPEC exam
                နှင့် လုပ်ငန်းခွင်သို့ ဝင်ရောက်ရာတွင် အဆင်သင့်ဖြစ်နိုင်စေရန် OJT
                courses များ၊ <br />
                ဂျပန် IT industry များတွင် IT engineer အဖြစ် ရပ်တည်စေရန်
                ဂျပန်ဘာသာစကား အစရှိသည်များကို တစ်စုတစ်စည်းတည်း လေ့လာနိုင်စေရန်
                ရည်ရွယ်ထားပါသည်။ 
                <br/>
                <br/>
                ဆက်သွယ်ရန်...
                <br />
                09 40 40 60 366
                <br />
                09 40 40 60 377
               
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="post-media wow fadeIn" data-aos="fade-left">
                <img
                  src={img3}
                  alt=""
                  className={classes.img}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
      
      </div>
      </Card>
  )
}

export default Abouts;
