import { useState } from "react";
import {Card, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import logo from "./logo-buzo.webp"
import './ItemDetail.css';


function ItemDetail({mostrardetalle}) {
  const [mostrar, setMostrar] = useState(true);
  const {nombre, descripcion, precio, estado, id} = mostrardetalle
  function onAdd(cantidad) {
    alert("Cantidad agregada:" + cantidad);
    setMostrar(false);
  }
    return (
        <>
        <Card>
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
                </div> }
                </Card.Body>
                </Card>
        </>
      );
}
  
  export default ItemDetail;