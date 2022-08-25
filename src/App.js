import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <ItemListContainer></ItemListContainer>
      </header>
    </div>
  );}

export default App;
