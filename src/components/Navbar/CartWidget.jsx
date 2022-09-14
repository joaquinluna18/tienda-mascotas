import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";


export const CardWiget = () => {
    
        return(
            <Link to="/cart">
                <BsFillCartCheckFill></BsFillCartCheckFill>
            </Link>     
          )

   
}

export default CardWiget;

