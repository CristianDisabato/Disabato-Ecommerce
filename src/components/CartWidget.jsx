import logo from './cartt.png';
import './cartwidget.css';
import { Link, useParams } from 'react-router-dom';



function CartWidget() { 
    return (<> 
    <div className='cart'>
    <Link to="/checkout"> 
    <img src={logo} className="cart" />
    </Link>
    </div>
    <p className='cartP'>4</p>
    </>
    );  
}

  
  export default CartWidget;