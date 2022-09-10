import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  const onAdd =(contador)=>{
      alert (`Agregaste ${contador} al carrito `)
  }


  return (
   < >
    (
    <BrowserRouter>
         <NavBar/>
          <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/category/:categoryId' element={<ItemListContainer/>} />
              <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
          </Routes>
      </BrowserRouter>
      
   )
      
      
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    
   </>
  );}

export default App;
