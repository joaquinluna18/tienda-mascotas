import React from "react";
import './Item.scss'

const Item = ({data}) => {
    return(
    <div>
        <div className="product" key={data.title}>
           <h1 className="titulo">{data.title}</h1>
            <p>{data.descripcion}</p>
            <img src={data.img} alt="" className="imagen"/>
            <hr></hr>
            <h3>{data.price}</h3>
            <button className="ver-mas"> <b>Comprar</b> </button>
        </div>
    </div>
    )
}

export default Item;