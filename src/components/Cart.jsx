<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.js';
import { useContext } from 'react';
import { Button, Card } from "react-bootstrap"
import './checkout.css';
import './cart.css';


export default function Cart() {

  const { cart, deleteItem, getItemCount, getItemPrice, emptyCart } = useContext(CartContext)


  return (
    <>
    <div className='centerCart'>
      <h4 className='titleCart'>Carrito de compras ({getItemCount()} en tu carrito)</h4>


      {getItemCount() > 0 ?
<>
        <div className='cardCart'>

          {cart.map (item => (

            <div className='lineCart' key={item.id}>
              <div className='cartContainer'>
                <img className='img-fluid' src={item.imagen} alt={"Producto"} width="120px" />
                <p className='cartQty'>Cantidad: {item.count} unidad/es x {item.nombre}</p>
                <p className='cartPrice'> ${item.precio}</p>
                <p className='cartSubt'> ${item.count * item.precio}</p>
               <p onClick={() => deleteItem(item.id)} className='DelItemCard'><img className='imgbasu' src={("../images/cesto.png")} alt={"Producto"} /></p>
              </div>
            </div>
          ))}


          <div className='finalCost'>
          <div className='totalLabel'>Total: ${getItemPrice()}</div>
           </div>
        </div>
        <div className='finalEmpty'>
        <Link to="/"><Button className="p-2 m-2" variant="primary">Volver a las Prendas</Button></Link>
        <Link to="/checkout"> <Button className="p-2 m-2" variant="light">Finalizar Compra</Button></Link>
        <Button  onClick={emptyCart}  className="p-2 m-2" variant="primary">Vaciar Carrito</Button>
        </div>
        </>
        : 
        <div className='emptyCart'>
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"  fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <Link to="/"><Button className="p-2 m-2" variant="primary">¡A comprar mas prendas!</Button></Link>
        <p className='noProducts'>¡Que pena! no hay productos en el carrito, te invitamos a volver a ver todas nuestras prendas!</p>
            <h2 className='h2check' >Disabato Ecommerce</h2>
        </div>
        }






</div>
    </>
  )
}

=======
import React from 'react'
import { useContext } from 'react'

export default function Cart() {

  const {cart} = useContext(CartContext)

  return (
    <div>Cart</div>
  )
}
>>>>>>> 841f5d4944b8c436fa014e1989a377caef5a4ba5
