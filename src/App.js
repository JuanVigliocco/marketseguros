import './App.css';
import NavBar from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';

function App() {

  

  return (
    <div className='app'>
    <NavBar />
    <ItemListContainer titulo={"Inmobiliaria y Seguros"} />
    </div>
  );
}

export default App