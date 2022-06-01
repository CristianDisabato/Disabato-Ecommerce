
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return <div>
      <h1>Disabato Ecommerce</h1>
      <NavBar/>
      <h2>
        PROXIMAMENTE
      </h2>
      <ItemListContainer aviso={"Pronto regresamos"}/>
    </div>;
}

export default App;
