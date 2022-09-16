import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './CartItem.scss';

export const CartItem = ({title, img, item , price, quantity}) => {
    const {removeProduct} = useContext(CartContext);

    return(
    
        <div className="product-cartItem" >
           <div>
           <img src={img} alt="" className="imagen"/>
           </div>
          <div>
            <h1 className="titulo-cartItem">{title}</h1>
            <h2>{price}</h2>
            <h3>{quantity}</h3>
            <button onClick={()=>removeProduct(item.id)}>Eliminar</button>
          </div>
        </div>
        
    
    )
}
export default CartItem;
