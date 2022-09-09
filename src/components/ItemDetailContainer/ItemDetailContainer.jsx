import React from "react";
import { useState,useEffect } from "react";
import { getArray } from "../helper/getArray";
import { array } from "../../data/data";
import {ItemDetail} from './ItemDetail';
import './ItemDetail.scss';


export const ItemDetailContainer=()=>{
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    

    useEffect(()=>{
        getArray(array)
        .then(res=>{
            const item = res.find((item)=> item.id === 1)
            setProduct(item) 
        })
        .catch(err=>console.log (err))
        .finally(()=>setLoading(false))
    },[])
    
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
