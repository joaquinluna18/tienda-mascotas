import React from "react";
import './Item.scss';
import { Link } from "react-router-dom";

export const Item = ({title, descripcion, price, img,id  }) => {
    return(
    <div >
        <div className="product" key={title}>
           <h1 className="titulo">{title}</h1>
            <p>{descripcion}</p>
            <img src={img} alt="" className="imagen"/>
                <hr />
            <h3>{price}</h3>
            <button  className="verMas">
                <Link className="verMas" to={`/item/${id}`}>
                Ver mas
                </Link>
             </button>
        </div>
    </div>
    )
}
export default Item;
