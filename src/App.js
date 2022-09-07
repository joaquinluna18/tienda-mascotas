import './App.css';
import Navbar from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';
import { useState } from 'react';
import {Carrito} from './components/Carrito/Carrito';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  
  const [numeroProductos, setNumeroProductos] = useState(0);

  const agregar = (productos) => {
      console.log('funcion agregar', productos)
      setNumeroProductos(productos);
     
  }

  console.log('numerosProductos',numeroProductos);

  return (
   <>
   <BrowserRouter>
      <Navbar/>
         <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        </Routes>
   </BrowserRouter>
   </>
  );}

export default App;
/*
<ItemCount stock={5} initial={1} addOn={agregar}/>
<Carrito numeroCarrito={numeroProductos}/>
*/