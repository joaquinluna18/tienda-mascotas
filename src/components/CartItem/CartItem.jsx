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
          <div className="box">
            <h1 className="cartItem-titulo">{title}</h1>
            <h2 className="cartItem-price">{price}</h2>
            <h3 className="cartItem-quantity">CANTIDAD: {quantity}</h3>
            <button className="bttn-eliminar" onClick={()=>removeProduct(item.id)}>Eliminar</button>
          </div>
        </div>
        
    
    )
}
export default CartItem;
