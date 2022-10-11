import React, { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";

export const  Firebase = () => {

    useEffect(()=>{
        const getData = async()=>{
                const query = collection(db, "items");
                const response = await getDocs(query);
                console.log(response);
        }
        getData()
    },[])

    return(
        <div> Pagina firebase</div>
    )
}