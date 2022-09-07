import { useState } from "react";
import './ItemCount.scss'

export const ItemCount = ({stock, initial, addOn}) => {
    const [contador, setContador] = useState(initial);

    const incrementar = () =>{
        if(contador<stock){
            setContador(contador + 1)
        }  
    }

    const disminuir = () =>{
        if(contador>1){
            setContador(contador - 1)
        } 
    }

    return(
        <div className="ItemCount">
            <p>Productos: {contador}</p>
            <button className="bttn" onClick={incrementar}>  +  </button>
            <button className="bttn" onClick={disminuir}>  -  </button>
            <br></br>
            <button className="bttn" onClick={()=>(addOn(contador))}> Agregar </button>

        </div>
    )
}