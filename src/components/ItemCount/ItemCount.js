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
        if(contador>0){
            setContador(contador - 1)
        } 
    }

    return(
        <div class="ItemCount">
            <p>Productos: {contador}</p>
            <button class="bttn" onClick={incrementar}>  +  </button>
            <button class="bttn" onClick={disminuir}>  -  </button>
            <br></br>
            <button class="bttn" onClick={()=>(addOn(contador))}> Agregar </button>

        </div>
    )
}