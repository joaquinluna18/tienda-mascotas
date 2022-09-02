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
                <h1>Detalle de producto</h1>
                <hr></hr>
                {
                    loading ? <h2>Cargando...</h2>
                    :
                    <div className="item-detail">
                        <div >
                        <img src={data.img} alt="" className="foto" />
                        <h4 className="kilos-item-detail">{data.descripcion}</h4>
                        </div>
                        <div>
                        <h2>{data.title}</h2>
                        <p className="informacion">{data.info}</p>  
                        <h3 className="precio-item-detail">{data.price}</h3>
                        </div>
                    </div>
                }

            </div> 
        )
}
export default ItemDetail;