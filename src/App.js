import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {

  

  return (
    <div className='app'>
    <NavBar />
    <ItemListContainer greetings={"Bienvenidos"}/>
    </div>
  );
}

export default App