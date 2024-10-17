import styles from '../css/Forget.module.css';
const Forget = () => {
    return(
        <div className={styles.container}>
            <div className={styles.img}>
                <img src="../forget.jpg" alt="wait for load....." />
            </div>
            
            <div className={styles.Forgot}>
                <form>
                <h1>Forget password          </h1>
                <h4>Enter Your Details below</h4>
                <div className={styles.text_field}>
                    <input type={styles.text} placeholder="Email or Phone Number" /></div>
                
                 <div className={styles.footer}>
                    <br/>
                <button type={styles.button} className={styles.btn}>submit</button>                
                </div>
                </form>
            </div>
        </div>
    )
}
export default Forget;