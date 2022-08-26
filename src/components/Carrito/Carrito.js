import './Carrito.scss';

export const Carrito = ({numeroCarrito}) => {
    return(
        <div class="Carrito">
            Carrito:
            <span>{numeroCarrito}</span> 
        </div>
      )
}