import './signin.css'
import amazon from '../../Assets/logos/amazon-b.svg'
import {Link} from 'react-router-dom';
const Signin = () => {
    return (
        <div id="signin">
            <img src={amazon}></img>
            <br/>
            <div id="signin-div">
                <div id="siginh">Sign-In</div> 
                <form id="form">
                    <br/>
                    <div>
                        Email
                        <input type="email" id="email"/>
                    </div>
                    <br/>
                    <div>
                        Password
                        <input type="password" id="password" />
                    </div>
                    <br/>
                    <button id="signinbutton">Sign In</button>
                </form>
            
            </div>
            <div id="newacc">
            <p>New to amazon?</p>
            <Link to="/signup"><button>Create your amazon account</button></Link>
            </div>
        </div>
    )
}

export default Signin;