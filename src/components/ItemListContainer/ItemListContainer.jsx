import React from 'react';
import { getArray } from '../helper/getArray';
import { array } from '../../data/data';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from './ItemList/ItemList';
import { useParams } from 'react-router-dom';

 export const ItemListContainer =() =>{
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId}= useParams()

  useEffect(()=>{
    setLoading(true)
      getArray(array)
      .then(res => {
        categoryId?
         setProducts(res.filter((item) => item.category === categoryId))
         :
         setProducts(res)
      })
      .catch(err => console.log(err))
      .finally(()=>setLoading(false))
  },[categoryId])

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

