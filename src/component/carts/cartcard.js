import './cartcard.css'
import CartContext from '../myContext/context';
import { useContext } from 'react'
import star from '../../Assets/logos/star.svg';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {auth,db} from '../firesetup/fireconfig'
const Pdetail= ({ pdetail ,index}) => {
    const { carts, addCart } = useContext(CartContext);
    const Stars = [];

    for (let i = 0; i < Number(pdetail.star); i++) {
        Stars.push(<span key={i}><img src={star} alt="" className="star" /></span>);
    }
    const notify = () => toast('Removed from cart', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const removeditem=()=>{
        // console.log(index);
        let cart=[...carts];
        cart.splice(index,1);
        addCart(cart);
        if(auth.currentUser != null){
         
            db.collection("products")
            .doc(auth.currentUser.email)
            .set({
              carts:cart ,
              email:auth.currentUser.email
            });
        }
    }
    return (
        <div className="cartcard">
           {/* { console.log("index---->",index)} */}
            <div><img alt="" src={pdetail.src} /></div>
            <div>
                <p> {pdetail.des}</p>
                <p> {pdetail.company}</p>
                <p> Rs. {pdetail.price}</p>
                <p className="stars">{Stars}</p>

                <button onClick={() => { notify(); removeditem() }} >Remove from cart <b>X</b></button>
            </div>
        </div>
    );
}
export default Pdetail;