// import React from 'react'
import styles from '../css/Create.module.css'
const CreateAccount = () => {
    return (
      <>
              <h1>Megha</h1>
           <div className={styles.container}>
              <div className={styles.img}>
                  <img src="../Createpage.jpg" alt="wait for load....." />
              </div>
              
              <div className= {styles.login-area}>
                  <div className={styles.login-box}>
                  <form>
                  <h1>Create An Account</h1>
                  <h4>Enter Your Details below</h4>
                  <div className={styles.text-field} >
                      <input type="text" placeholder="name" />
                  </div>
                  <div className={styles.text-field}>
                      <input type="text" placeholder="Email or Phone Number" /></div>
                  
                  <div className={styles.text-field}>
                      <input type="password" placeholder="password"/>
                  </div>
                  
                   <div className={styles.footer}>
                   
                  <button type="button" className="btn">Create account</button>
                  <button type="botton" className="btn2">sign up with google</button>
                  </div>
                  <div className={styles.link}>
                   <h6>Already have account?</h6>
                   {/* <Link to={'/'}><h6>Login</h6></Link> */}
                  </div>
  
                  </form>
                  </div>
                 
  
  
              </div>
          </div>
      </>
    )
  }
  
  export default CreateAccount;
  