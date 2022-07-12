
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import MyProvider from './context/CartContext';
import CheckOut from './components/Checkout';
import Footer from './components/Footer';

function App() {
  return <div>
      
      
      <BrowserRouter>
      <MyProvider>
      <NavBar/> 
      
    <Routes>
    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/category/:id" element={<ItemListContainer/>} />
    <Route path="/item/:id" element={<ItemDetailContainer/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/checkout" element={ <CheckOut/> } />


    </Routes>
    
    </MyProvider>
    </BrowserRouter> 
    </div>;
}

export default App;

