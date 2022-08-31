import React from "react";
import './Item.scss'

const Item = ({data}) => {
    return(
    <div>
        <div className="product" key={data.title}>
           <h1>{data.title}</h1>
            <img src={data.img} alt="" className="imagen"/>
            <h2>{data.price}</h2>
        </div>
    </div>
    )
}

export default Item;