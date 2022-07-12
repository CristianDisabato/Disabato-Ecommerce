import React from "react";
import { useState } from "react";
import './checkout.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.js';
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import Cart from './Cart.jsx'; 
import {Link} from 'react-router-dom';
import { Button, Card } from "react-bootstrap"
import swal from 'sweetalert';



function CheckOut() {


    const [mail, setMail] = useState("");
    

    const [idBuyed, setIdBuyed]=useState('')

    const db = getFirestore()
    const ordersCollection = collection(db, 'orders');

    const {cart, getItemPrice} = useContext(CartContext)


    function handleClick(){
        const order = {
            buyer: {mail},
            items: cart,
             total: getItemPrice()

        };

        addDoc(ordersCollection, order).then(({id}) => {
          setIdBuyed(id);
          swal({
            title: "¡Gracias!",
            text: "Ya enviamos toda la información de compra al email. " + " " + mail + " ¡Gracias por elegirnos!",
            icon: "success",
            button: "Continuar",
          });

        });

    }

 

  return (
    
    <>
    <Cart/>
    <div className="checkContainer">
    <h6 className="titleCheck">Coloque sus datos para poder comunicarnos con usted y mandarle el link de pago de la compra.</h6>
    <h6 className="orderNumber checktext">Checkout order: {idBuyed}</h6>
    
    <input onChange={(e) => setMail(e.target.value)} placeholder="Ingrese su e-mail" className="inMail"></input>
    <Button  onClick={() => handleClick()}  className="p-2 m-2" variant="primary">COMPRAR</Button>
    </div>
    </>
  )
}

export default CheckOut