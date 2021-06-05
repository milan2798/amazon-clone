import './product.css'
import CartContext from '../myContext/context';
import {useContext} from 'react'
import star from '../../Assets/logos/star.svg';
import {  toast } from 'react-toastify';
import {auth,db} from '../firesetup/fireconfig'
import 'react-toastify/dist/ReactToastify.css';
const Product= ({ pdetail }) => {
    const  {carts,addCart}  = useContext(CartContext);
    const Stars=[];
        
        for(let i=0;i<Number(pdetail.star);i++){
            Stars.push(<span key={i}><img alt="" src={star} className="star"/></span>);
        }
        const addToCart=()=>{
            const cart=[...carts,pdetail];
            addCart(cart)
            if(auth.currentUser != null){
                db.collection("products")
                .doc(auth.currentUser.email)
                .set({
                  carts:cart ,
                  email:auth.currentUser.email
                });
            }
            
        }
        const notify = () => toast('Added to cart', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    return (   
        <div className="product">          
            <p> {pdetail.des}</p>
            <p> {pdetail.company}</p>
            <p> Rs. {pdetail.price}</p>
            <p className="stars">{Stars}</p>
            <img alt="product" src={pdetail.src} />
            <p className="center"><button onClick={()=>{notify();addToCart()}} >Add to cart</button></p>
        </div>
    );
}

export default Product;