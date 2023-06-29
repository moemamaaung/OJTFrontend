import classes from './History.module.css'

const History = () => {
  return (
<div className={classes.bg}>
    <div><h1 className={classes.text}>Our History</h1></div>
    <div className={classes.timeline}>
     <div className={classes.container}>
      <div className={classes.content}>
        <h2>2015</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      </div>
      <div className={classes.container1}>
       <div className={classes.content}>
        <h2>2017</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    
    <div className={classes.container}>
      <div className={classes.content}>
        <h2>2016</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    </div>
    </div>
  
  )
}

export default History