import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) =>{

    const [productCartList, setProductCartList] = useState([]);
  

    const isInCart = (id) =>{

        const elmIndex = productCartList.findIndex(product=> product.id === id);
        if(elmIndex>=0){
            return {exists: true, index:elmIndex}
        }
        else{
            return {exists:false, index:undefined}
        }
    }

    const addProduct = (product, qty) =>{
        const newProduct = {...product, quantity:qty}

        const newList = [...productCartList,product];
        newList.push(newProduct);
        setProductCartList(newList)
        
        const inCartObj = isInCart(product.id);
        if(inCartObj.exists){
            const productListCopy = [...productCartList];
            productListCopy[inCartObj.index].quantity = productListCopy[inCartObj.index].quantity + product.quantity;
            setProductCartList(productListCopy)
        }
        else{
            const newList = [...productCartList, product];
            setProductCartList(newList)
        }
    }

    const removeProduct = (id)=>{
        const copyArray = [...productCartList];
        const newArray = copyArray.filter(elm=>elm.id !== id);
        setProductCartList(newArray);
    }

    const clearProductCartList=()=>{
        setProductCartList([])
    }

    const getTotalPoducts =()=>{
        const totalProducts = productCartList.reduce((acc, item)=> acc + item.quantity,0)
       return totalProducts;
    }

    return(
        <CartContext.Provider value={{productCartList, addProduct, removeProduct, clearProductCartList, getTotalPoducts}}>
            {children}
        </CartContext.Provider>
    )
}