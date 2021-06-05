import './signin.css'
import amazon from '../../Assets/logos/amazon-b.svg'
import { useState } from 'react';
import { auth} from '../firesetup/fireconfig';
import { Link, Redirect } from 'react-router-dom';
const Signin = () => {
    const [user, setUser] = useState({ email: "", pass: "" });
    const [error, seterror] = useState({ er: false, text: "", home: false });

    const fireLog = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(user.email, user.pass)
            .then((userCredential) => {
                // Signed in
                // console.log("signin",user.email)
                seterror({ er: false, text: "", home: true })
                // ...
            })
            .catch((error) => {
                // console.log("signin error",error.message);
                seterror({ er: true, text: error.message })
                //console.log(error);
            });



    }
    return (
        <div id="signinm">
            <div id="signin">
                {/* {console.log(user.email)} */}
            {error.home ? <Redirect to="/"></Redirect> : <span></span>}
                {auth.currentUser != null ? <Redirect to="/"></Redirect> : <span></span>}
                <img alt="logo" src={amazon}></img>
                <br />
                <div id="signin-div">
                    <div id="siginh" >Sign-In</div>
                    <form id="form" onSubmit={fireLog} >
                        <br />
                        <div>
                            Email
                        <input type="email" onChange={(e) => setUser({ email: e.target.value, pass: user.pass })} id="email" />
                        </div>
                        <br />
                        <div>
                            Password
                        <input type="password" onChange={(e) => setUser({ email: user.email, pass: e.target.value })} id="password" />
                        </div>
                        <br />
                        <button id="signinbutton">Sign In</button>
                    </form>

                </div>
                <div id="newacc">
                    <p>New to amazon?</p>
                    <button> <Link to="/signup">Create your amazon account</Link></button>
                </div>
                <h4>{error.er ? error.text : <span></span>}</h4>
            </div>
        </div>
    )
}

export default Signin;