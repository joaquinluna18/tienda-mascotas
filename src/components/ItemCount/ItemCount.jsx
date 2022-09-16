import { useState } from "react";
import './ItemCount.scss'

export const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial);

    const Add = () =>{
         setContador(contador + 1)
    }

    const Res = () =>{
       setContador(contador - 1)
    }

    return(
        <div className="ItemCount">
            <div className="Count">
            <button className="bttn" onClick={Res} disabled={contador === initial}>  -  </button>
            <h1>{contador}</h1>
            <button className="bttn" onClick={Add} disabled={contador === stock}>  +  </button>
            <hr></hr> 
            </div>

            <button className="bttn" onClick={()=>(onAdd(contador))}> Agregar al carrito </button>

        </div>
    )
}