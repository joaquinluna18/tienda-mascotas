import React from "react";
import './ItemDetail.scss';
import { ItemCount } from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({id, title, descripcion, price, img, info, item }) =>{

    const {addProduct} = useContext(CartContext);

    const onAdd =(contador)=>{
       const newProduct={id, title, descripcion, price, img, info, item, quantity:contador}
       addProduct(newProduct)
    };


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
                        <ItemCount stock={10} initial={1} onAdd={onAdd}/>
                        </div>
                        
        </div>
    )
}
export default ItemDetail