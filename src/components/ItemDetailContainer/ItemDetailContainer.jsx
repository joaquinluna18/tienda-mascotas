import React from "react";
import { useState,useEffect } from "react";
import { getArray } from "../ItemListContainer/helper/getArray";
import { array } from "../../data/data";
import {ItemDetail} from './ItemDetail';
import { useParams } from "react-router-dom";
import './ItemDetail.scss';


export const ItemDetailContainer=()=>{
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const [itemId] = useParams()

    useEffect(()=>{
        getArray(array)
        .then(res=>{
            const item = res.find((item)=>item.id === Number(itemId))
            setProduct(item) 
        })
        .catch(err=>console.log (err))
        .finally(()=>setLoading(false))
    },[itemId])
    console.log(product)
    
        return(
            <div>
                 {
                    loading ? <h2>Cargando...</h2>
                    :
                    <ItemDetail {...product}/>
                   
                }

            </div>
            
                
        )
}
export default ItemDetailContainer;
