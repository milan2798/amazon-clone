import './signup.css'
import amazon from '../../Assets/logos/amazon-b.svg'
import { Link, Redirect } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../firesetup/fireconfig'


const Signup = () => {
    const [user, setUser] = useState({ email: "", pass: "" });
    const [error, seterror] = useState({ er: false, text: "", home: false });

    const fireup = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(user.email, user.pass).then(cred => {
            // console.log(cred.user);
            // console.log("signup",user.email)
            seterror({ er: false, text: "", home: true })
        }).catch((error) => {
            // console.log("signup-error",error.message);
            seterror({ er: true, text: error.message })
        });

    }

    return (
       
        <div id="signupm">
        <div id="signup">
             {/* {      console.log(user.email)} */}
            {error.home ? <Redirect to="/"></Redirect> : <span></span>}
            <img src={amazon} alt="logo"></img>
            <br />

            <div id="signup-div">
                <div id="signuph">Sign-Up</div>
                <form onSubmit={fireup} id="form">
                    <br />
                    <div>
                        Email
                        <input type="email" onChange={(e) => setUser({ email: e.target.value ,pass:user.pass})} id="emails" required />
                    </div>
                    <br />
                    <div>
                        Password
                        <input type="password" onChange={(e) => setUser({ email:user.email,pass: e.target.value })} id="passwords" required />
                    </div>
                    <br />
                    <div>
                        Mobile number
                        <input type="phone" id="number" placeholder="Enter Number without country code" />
                    </div>
                    <br />
                    <button id="signupbutton">create an account</button>
                </form>

            </div>
            <div id="exuser">
                <p>Aleardy on amazon?</p>
                <button><Link to="/signin">Sign in from here</Link></button>
            </div>

            <h4>{error.er ? error.text : <span></span>}</h4>
        </div>
        </div>
    )
}

export default Signup;