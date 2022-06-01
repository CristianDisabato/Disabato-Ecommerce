import logo from './cart1.png';
import './CartWidget.css';



function CartWidget() { 
    return (<><img src={logo} className="cart" /><p className='cartP'>4</p></>
    );  
}

  
  export default CartWidget;