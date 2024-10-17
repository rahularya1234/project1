import { Link } from 'react-router-dom';
import '../css/Login.css'
const Login = () => {
    return(
        <div className="container">
            <div className="img">
                <img src="../login1.jpg" alt="wait for load....." />
            </div>
            
            <div className="login-area">
                <div className="login-box">
                <form>
                <h1>Log into Exclusive </h1>
                <h4>Enter Your Details below</h4>
                <div className="text_field">
                    <input type="text" placeholder="Email or Phone Number" /></div>
                
                <div className="text_field">
                    <input type="password" placeholder="password"/>
                </div>
                
                 <div className="footer">
                 
                <button type="button" className="btn">Login</button>
                <div className="link">
                 <Link to={'/forget'}><h6>Forget password/</h6></Link>
                 <Link to={'/create'}><h6>Create an account</h6></Link>
                </div>
                
                
                </div>

                </form>
                </div>
               


            </div>
        </div>
    )
}
export default Login;