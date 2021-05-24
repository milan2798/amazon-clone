import './signup.css'
import amazon from '../../Assets/logos/amazon-b.svg'
import {Link} from 'react-router-dom';
const Signup = () => {
    return (
        <div id="signup">
            <img src={amazon} alt="logo"></img>
            <br/>
            <div id="signup-div">
                <div id="signuph">Sign-Up</div> 
                <form id="form">
                    <br/>
                    <div>
                        Email
                        <input type="email" id="emails"/>
                    </div>
                    <br/>
                    <div>
                        Password
                        <input type="password" id="passwords" />
                    </div>
                    <br/>
                    <div>
                        Mobile number
                        <input type="phone" id="number" placeholder="Enter Number without country code"/>
                    </div>
                    <br/>
                    <button id="signupbutton">create an account</button>
                </form>
            
            </div>
            <div id="exuser">
            <p>Aleardy on amazon?</p>
            <Link to="/signin"><button>Sign in from here</button></Link>
            </div>
        </div>
    )
}

export default Signup;