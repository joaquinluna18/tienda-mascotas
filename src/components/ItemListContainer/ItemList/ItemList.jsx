import { useState,useEffect } from "react";
import getFetch from "../../../helper/helper";
import './ItemList.scss';
import  Item from './Item/Item';


const ItemList = () =>{
    const [data, setdata] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        getFetch.then(data=>{
            setdata(data)
            setLoading(false)
        })
    },[])
    return(
        <>
        <h1> Productos </h1>
        {
            loading ? <h2>Cargando...</h2>
            :
            <div className="grid-product" >
            {data.map(data =>(
                <Item key ={data.title} data={data}/>
            ))}
            </div>
        }
        </>
    )

}

export default ItemList;