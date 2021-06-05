import CartContext from '../myContext/context';
import Cartcard from './cartcard';
import {useContext} from 'react'
import './cartspage.css'
const Cartspage=()=>{
    const {carts}=useContext(CartContext);
      

    return(
        
      <div id="cartdiv">
          <h1>
              Your shopping cart
          </h1>
          {
              carts.map((item,index)=><Cartcard key={index} index={index} pdetail={item}/>)
          }
          <h2>Sub total: Rs. {carts.reduce((total,item)=>total+Number(item.price),0)}</h2>
      </div>
    );

}
export default Cartspage;