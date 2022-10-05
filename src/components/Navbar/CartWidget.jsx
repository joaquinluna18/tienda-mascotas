import { useContext } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import React, { Component }  from 'react';


export const CardWiget = () => {
    
    const {getTotalPoducts} = useContext(CartContext);

        return(
            <Link to="/cart">
            <div>
                <BsFillCartCheckFill>
                </BsFillCartCheckFill>
             <span className="contador-carrito">+ 
             {getTotalPoducts()}
           </span> 
         </div>
         </Link>  
          )

}

export default CardWiget;

