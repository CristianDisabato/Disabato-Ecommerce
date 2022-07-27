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
  }
    return (
        <>
        <Card>
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
                </div> }
                </Card.Body>
                </Card>
        </>
      );
}
  
  export default ItemDetail;