import React from 'react';
import { getArray } from '../helper/getArray';
import { array } from '../../data/data';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from './ItemList/ItemList';

 export const ItemListContainer =() =>{
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
      getArray(array)
      .then(res => { setProducts (res)})
      .catch(err => console.log(err))
      .finally(()=>setLoading(false))
  },[])

  return (
    <div className='grid-product'>
      {
            loading ? <h2>Cargando...</h2>
            :
            <ItemList items={products}/>
        }
    </div>
  )
 }

 export default ItemListContainer;

