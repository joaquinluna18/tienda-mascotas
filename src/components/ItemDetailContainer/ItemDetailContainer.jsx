import React from "react";
import { useState,useEffect } from "react";
import { getArray } from "../helper/getArray";
import { array } from "../../data/data";
import {ItemDetail} from './ItemDetail';
import './ItemDetail.scss';
import { useParams } from "react-router-dom";


export const ItemDetailContainer=()=>{
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {itemId}= useParams()
    

    useEffect(()=>{
        getArray(array)
        .then(res=>{
            const item = res.find((item)=> item.id === Number(itemId))
            setProduct(item) 
        })
        .catch(err=>console.log (err))
        .finally(()=>setLoading(false))
    },[itemId])
    
        return(
            <div>
                 {
                    loading ? 
                    <h2>Cargando...</h2>
                    :
                    <ItemDetail {...product}/>
                   
                }

            </div>
            
                
        )
}
export default ItemDetailContainer;
