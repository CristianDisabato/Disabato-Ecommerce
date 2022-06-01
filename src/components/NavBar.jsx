import CartWidget from './CartWidget';
import './NavBar.css';
function NavBar() {
    return ( <header> 
        <nav>
            <ul className='navbar'>
                <li><a className='fontnav' href="">STORE</a></li>
                <li><a className='fontnav' href="">INICIO</a></li>
                <li><a className='fontnav' href="">ABOUT US</a></li>
                <CartWidget/>
                
                
            </ul>
        </nav>
    </header>
    );
  }
  
  export default NavBar;