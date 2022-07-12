import { Container, Nav, Navbar, NavbarBrand, NavDropdown, NavLink } from 'react-bootstrap';
import CartWidget from './CartWidget';
import { Link, useParams } from 'react-router-dom';

import './NavBar.css';
function Footer() {
    return <>
    <Navbar bg="dark" variant="dark">
      <Container>
      <Link to="/"> <Navbar.Brand>DISABATO ECOMMERCE</Navbar.Brand> </Link>
      <Nav className="me-auto">
      <div className='iniciobrand'>
        <Link to={'/'}>INICIO</Link>
        </div>
        <NavDropdown title="CATEGORIAS" id="navbarScrollingDropdown">
          <div className='categorybrand'>
        <Link to={'/category/buzos'}>BUZOS</Link>
        </div>
        <br/>
        <div className='categorybrand'>
        <Link to={'/category/camperas'}>CAMPERAS</Link>
        </div>
          <NavDropdown.Divider />
          <div className='categorybrand'>
          <Link to={'/category/remeras'}>REMERAS</Link>
          </div>
        </NavDropdown>
        <CartWidget />
      </Nav>
      </Container>
    </Navbar>
  </>
  }
  
  export default Footer;