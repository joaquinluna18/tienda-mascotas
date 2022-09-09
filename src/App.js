import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  const onAdd =(contador)=>{
      alert (`Agregaste ${contador} al carrito `)
  }


  return (
   < >
      <NavBar/>
      <ItemListContainer />
      <ItemDetailContainer/>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
      
    
   </>
  );}

export default App;
