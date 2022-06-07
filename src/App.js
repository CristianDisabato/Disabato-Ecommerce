
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return <div>
      <h1>Disabato Ecommerce</h1>
      <NavBar/>
      <h2>
        PROXIMAMENTE
      </h2>
      <ItemListContainer aviso={"Pronto regresamos"}/>
      <ItemCount maxstock="12" initialstock="1"/>
    </div>;
}

export default App;

