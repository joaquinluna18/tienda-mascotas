import { useState,useEffect } from "react";
import getFetch from "../../helper/helper";
import './ItemDetail.scss'

const ItemDetail  =() => {
    const[data, setData] = useState({})
    const[loading, setLoading] =useState(false)

    useEffect(()=>{
        getFetch
        .then(response =>{
            setData(response.find(prod => prod.id === 1))
            setLoading(false)
        })
    },[])
    console.log(data)
        return(
            <div className="item-container">
                <h1>Item detail container</h1>
                {
                    loading ? <h2>Cargando...</h2>
                    :
                    <div className="item-detail">
                         <img src={data.img} alt=""  />
                         <h2>{data.title}</h2>
                         <h3>{data.price}</h3>
                    </div>
                }

            </div>
        )
}
export default ItemDetail;