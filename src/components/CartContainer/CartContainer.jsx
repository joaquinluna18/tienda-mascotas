import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import './CartContainer.scss';
import { Link } from "react-router-dom";


export const CartContainer = () =>{
    const {productCartList, clearProductCartList,} = useContext(CartContext);

    return(
        
        <div>
            {
                productCartList.length>0 ?
                <>
                   <h1 className="cartContainer-titulo">PRODUCTOS SELECCIONADOS</h1>
                    <div className="cart-Container">
                            {
                            productCartList.map((item) => <CartItem key={item.id} {...item} item={item}/>
                            ) 
                            }

                    <hr />
                    <button className="bttn-clear" onClick={clearProductCartList}>VACIAR CARRITO</button>
                    </div>
                </>
                :
                <>
                    <h2 className="cartContainer-sinproductos">No hay productos seleccionados aun</h2>
                    <Link to={"/"} id="brand">
                    <button className="bttn-inicio">IR AL INICIO</button>
                    </Link>
                </>
            }
           
        
        </div>
    
    )
}