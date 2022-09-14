import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {CartContainer} from './components/CartContainer/CartContainer'


function App() {
  return (
   < >
    (
    <BrowserRouter>
         <NavBar/>
          <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/category/:categoryId' element={<ItemListContainer/>} />
              <Route path='/cart' element={<CartContainer/>} />
              <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
          </Routes>
      </BrowserRouter>
      
   )
   </>
  );}

export default App;
