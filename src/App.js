import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hola from './components/Hola/Hola';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Hola></Hola>
        <ItemListContainer></ItemListContainer>
      </header>
    </div>
  );}

export default App;
