<<<<<<< HEAD
import { useState, useEffect } from "react";
import {Card, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import './ItemDetail.css';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import swal from 'sweetalert';



function ItemDetail({mostrardetalle}) {
  const { isInCart, addItem} = useContext(CartContext)
  
  const [mostrar, setMostrar] = useState(true);
  const {nombre, descripcion, precio, estado, id, imagen, stock} = mostrardetalle
  function onAdd(cantidad) {
    swal({
      title: "¡Enhorabuena!",
      text: "Acabas de agregar " + cantidad + "" + nombre,
      icon: "success",
      button: "Continuar",
    });
    setMostrar(false);
    isInCart(mostrardetalle.id)
    addItem(mostrardetalle, cantidad)
=======
import { useState } from "react";
import {Card, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import logo from "./logo-buzo.webp"
import './ItemDetail.css';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


function ItemDetail({mostrardetalle}) {
  const [mostrar, setMostrar] = useState(true);
  const {isInCart, addItem} = useContext(CartContext)
  const {nombre, descripcion, precio, estado, id} = mostrardetalle
  function onAdd(cantidad) {
    alert("Cantidad agregada:" + cantidad);
    setMostrar(false);
    isInCart(detalle.id)
    addItem(mostrardetalle, qty)
>>>>>>> 841f5d4944b8c436fa014e1989a377caef5a4ba5
  }
    return (
        <>
        <Card>
<<<<<<< HEAD
            <Card.Img variant="top mx-auto" src={imagen} style={{ maxWidth: 500, maxHeight: 500 }} />
            <Card.Body >
                <Card.Text>
                    <p className="detailtext"> {nombre}</p>
                    <br />
                    <p className="detailtext"> {descripcion}</p>
                    <br />
                    <p className="detailtext"> ${precio}</p>
                    <br />
                    <p className="detailtext"> {estado}</p>
                    <br />
                </Card.Text>
                
                {mostrar ? <ItemCount maxstock={10} initialstock={1} onAdd={onAdd} />: <div className="buttoncenter">
                  <Link to="/cart"><Button  variant="primary">Ir al carrito</Button></Link>
                  <br/>
                  <br/>
                  <Link to="/"><Button className="buttoninfo" variant="info">Seguir comprando</Button></Link>
=======
            <Card.Img variant="top" src={logo} style={{ maxWidth: 500, maxHeight: 500 }} />
            <Card.Body >
                <Card.Text>
                    Nombre: {nombre}
                    <br />
                    Descripción: {descripcion}
                    <br />
                    Precio: {precio}
                    <br />
                    Estado: {estado}
                    <br />
                </Card.Text>
                
                {mostrar ? <ItemCount maxstock={10} initialstock={1} onAdd={onAdd} />: <div>
                  <Link to="/cart"><Button  variant="primary">Ir al carrito</Button></Link>
                  <br/>
                  <br/>
                  <Link to="/"><Button  variant="primary">Seguir comprando</Button></Link>
>>>>>>> 841f5d4944b8c436fa014e1989a377caef5a4ba5
                </div> }
                </Card.Body>
                </Card>
        </>
      );
}
  
  export default ItemDetail;