
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import MyProvider from './context/CartContext';
<<<<<<< HEAD
import CheckOut from './components/Checkout';
import Footer from './components/Footer';
=======
>>>>>>> 841f5d4944b8c436fa014e1989a377caef5a4ba5

function App() {
  return <div>
      
      
      <BrowserRouter>
      <MyProvider>
      <NavBar/> 
<<<<<<< HEAD
      
=======
>>>>>>> 841f5d4944b8c436fa014e1989a377caef5a4ba5
    <Routes>
    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/category/:id" element={<ItemListContainer/>} />
    <Route path="/item/:id" element={<ItemDetailContainer/>} />
    <Route path="/cart" element={<Cart/>} />
<<<<<<< HEAD
    <Route path="/checkout" element={ <CheckOut/> } />


    </Routes>
    
=======


    </Routes>
>>>>>>> 841f5d4944b8c436fa014e1989a377caef5a4ba5
    </MyProvider>
    </BrowserRouter> 
    </div>;
}

export default App;

