<<<<<<< HEAD
import logo from './cartt.png';
import './cartwidget.css';
import { Link, useParams } from 'react-router-dom';
=======
import logo from './cart1.png';
import './CartWidget.css';
>>>>>>> 841f5d4944b8c436fa014e1989a377caef5a4ba5



function CartWidget() { 
<<<<<<< HEAD
    return (<> 
    <div className='cart'>
    <Link to="/checkout"> 
    <img src={logo} className="cart" />
    </Link>
    </div>
    <p className='cartP'>4</p>
    </>
=======
    return (<><img src={logo} className="cart" /><p className='cartP'>4</p></>
>>>>>>> 841f5d4944b8c436fa014e1989a377caef5a4ba5
    );  
}

  
  export default CartWidget;