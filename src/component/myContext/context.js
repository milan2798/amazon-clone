import React from 'react';
   const CartContext = React.createContext({
    carts:[],
    addCart:()=>{}// default value
   } );
 
   export default CartContext;

