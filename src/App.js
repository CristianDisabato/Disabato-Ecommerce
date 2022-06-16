
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return <div>
      
      {/* <ItemCount maxstock="12" initialstock="1"/> */}
      <BrowserRouter>
      <NavBar/> 
    <Routes>
    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/category/:id" element={<ItemListContainer/>} />
    <Route path="/item/:id" element={<ItemDetailContainer/>} />


    </Routes>
    
    </BrowserRouter> 
    </div>;
}

export default App;

