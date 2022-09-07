import './App.css';
import Navbar from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';
import { useState } from 'react';
import {Carrito} from './components/Carrito/Carrito';
import ItemDetail from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  
  const [numeroProductos, setNumeroProductos] = useState(0);

  const agregar = (productos) => {
      console.log('funcion agregar', productos)
      setNumeroProductos(productos);
     
  }

  console.log('numerosProductos',numeroProductos);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <ItemListContainer greeting ={"msj desde js"}/>
        <ItemDetail></ItemDetail>
        <ItemCount stock={5} initial={1} addOn={agregar}/>
        <Carrito numeroCarrito={numeroProductos}/>
      </header>
    </div>
  );}

export default App;
