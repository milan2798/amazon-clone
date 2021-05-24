import './header.css'
import amazonlogo from '../../Assets/logos/amazon-2.svg'
import search from '../../Assets/logos/search.svg'
import cart from '../../Assets/logos/cart.svg'
import location from '../../Assets/logos/location.svg'

const Header = () => {
    return (
        <div id="header">
            <img id="logo" alt="logo" src={amazonlogo}></img>
            <div id="address">
                <img src={location} alt="location" id="location" />

                <span> Hello<div>Select your address</div></span>
            </div>
            <div id="input">
                <button id="dropcat">All</button>
                <input type="text" />
                <div id="search"><img alt="search" src={search}></img></div>
            </div>
            <div id="signin">
                Hello.Sign in<br />
                <div>Account 	&#38; Lists</div>
            </div>
            <div id="orders">
                Returns<br />
                <div> &#38; Orders</div>
            </div>
            <div id="cart">
                <img alt="cart" src={cart} />
                <div>cart</div>
            </div>
        </div>
    )
}
export default Header;