import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import './CartContainer.scss';


export const CartContainer = () =>{
    const {productCartList} = useContext(CartContext);

    return(
        <div className="cart-Container">
           <p>CartContainer</p> 
           {
            productCartList.map((item) => <CartItem key={item.id} {...item}/>
            )
           }
        </div>
    )
}