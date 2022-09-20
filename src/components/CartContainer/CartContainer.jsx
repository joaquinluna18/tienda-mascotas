import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import './CartContainer.scss';


export const CartContainer = () =>{
    const {productCartList} = useContext(CartContext);

    return(
        
        <div>
            <h1 className="cartContainer-titulo">PRODUCTOS SELECCIONADOS</h1>
            <div className="cart-Container">
           {
            productCartList.map((item) => <CartItem key={item.id} {...item}/>
            )
           }
        </div>
        </div>
    
    )
}