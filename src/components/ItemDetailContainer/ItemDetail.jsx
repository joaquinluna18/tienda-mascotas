import React from "react";
import './ItemDetail.scss';

export const ItemDetail = ({title, descripcion, price, img, info }) =>{
    return(
        <div className="item-detail">
                        <div >  
                        <img src={img} alt="" className="foto" />
                        <h4 className="kilos-item-detail">{descripcion}</h4>
                        </div>
                        <div>
                        <h2>{title}</h2>
                        <hr />
                        <p className="informacion">{info}</p>  
                        <h3 className="precio-item-detail">{price}</h3>
                        </div>
        </div>
    )
}
export default ItemDetail