import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Item from "./components/Item/Item"

function App() {

  

  return (
    <div className='app'>
    <NavBar />
    <Item />
    <ItemListContainer />
    </div>
  );
}

export default App