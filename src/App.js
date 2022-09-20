import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {CartContainer} from './components/CartContainer/CartContainer'
import { CartProvider } from './context/CartContext';


function App() {
  return (
   < >
    (
    <CartProvider>
      <BrowserRouter>
         <NavBar/>
          <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/category/:categoryId' element={<ItemListContainer/>} />
              <Route path='/cart' element={<CartContainer/>} />
              <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
          </Routes>
      </BrowserRouter>
      </CartProvider>

      
   )
   </>
  );}

export default App;
