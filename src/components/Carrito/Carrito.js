import './Carrito.scss';
import { BsFillCartPlusFill } from "react-icons/bs";

export const Carrito = ({numeroCarrito}) => {
    return(
        <div class="Carrito">
            Carrito: 
            <span> { numeroCarrito}</span> 
            <BsFillCartPlusFill class="Icon"></BsFillCartPlusFill>
        </div>
      )
}