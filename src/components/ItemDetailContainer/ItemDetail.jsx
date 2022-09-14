import React from "react";
import './ItemDetail.scss';
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({title, descripcion, price, img, info, id }) =>{

    const onAdd =(contador)=>{
        alert (`Agregaste ${contador} al carrito `)
    }


    return(
        <div className="item-detail">
                        <div >  
                        <img src={img} alt="" className="foto" />
                        <h4 className="kilos-item-detail">{descripcion}</h4>
                        </div>
                        <div >
                        <h2 className="titulo-detail">{title}</h2>
                        <hr />
                        <p className="informacion">{info}</p>  
                        <h3 className="precio-item-detail">{price}</h3>
                        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                        </div>
                        
        </div>
    )
}
export default ItemDetail