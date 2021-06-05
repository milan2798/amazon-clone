import './header.css'
import amazonlogo from '../../Assets/logos/amazon-2.svg'
import search from '../../Assets/logos/search.svg'
import cart from '../../Assets/logos/cart.svg'
import location from '../../Assets/logos/location.svg'
import { Link } from 'react-router-dom'
import { auth } from '../firesetup/fireconfig';
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartContext from '../myContext/context';
import { useContext } from 'react'
import ipLocation from 'iplocation';
import axios from 'axios';
import 'cors'



const Header = () => {
    const [ip, setIp] = useState("");
    const [error, setError] = useState({ signout: false, signin: false });
    const { carts } = useContext(CartContext);
    const signOut = () => {

        auth.signOut().then(() => {
            notify();
            // console.log("signout", auth);
 
          
            setError({ signout: true });

            //<Redirect to="/signin"></Redirect>
        })
            .catch((error) => {
                console.log("signout--error", error);
            })
    }
    const notify = () => toast.dark('Sign out Successfully!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    useEffect(() => {
        axios("https://api.ipify.org?format=json")
            .then((data) => {
                ipLocation(data.data.ip).then((data) => {
                    // console.log("data", data);
                    setIp(data.city)
                })
                //=> { latitude: -33.8591, longitude: 151.2002, region: { name: "New South Wales" ... } ... }      
            }
            )
            .catch((error) => {
                console.log("error", error)
            })
        return true
    }, [setIp])




    return (
        <div>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <div id="header">


                <Link to="/"><img id="logo" alt="logo" src={amazonlogo}></img></Link>
                <div id="address">
                    <img src={location} alt="location" id="location" />
                    <span> you'r in<div>{ip !== "" ? ip : "Select your address"}</div></span>
                </div>
                <div id="input">
                    <button id="dropcat">All</button>
                    <input type="text" />
                    <div id="search"><img alt="search" src={search}></img></div>
                </div>
                <div id="signin-header">
                    {/* {console.log("Current User", auth.currentUser)} */}
                Hello,{auth.currentUser != null ? auth.currentUser.email.slice(0, 5).toUpperCase() : "Guest"}<br />
                    {auth.currentUser != null ? <div onClick={signOut}>Sign Out</div> : <Link to="/signin"><div>Sign In</div></Link>}
                </div>
                <div id="orders">
                    Returns<br />
                    <div> &#38; Orders</div>
                </div>
                <Link to="/carts">
                    <div id="cart">
                        <img alt="cart" src={cart} />
                        {/* {console.log("Carts", carts)} */}
                        <h3>{carts.length}</h3>
                        <div>cart</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Header;