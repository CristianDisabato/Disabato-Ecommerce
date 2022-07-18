import React from "react"
import { Button, Card } from "react-bootstrap"
<<<<<<< HEAD
=======
import logo from "./logo-buzo.webp"
>>>>>>> 841f5d4944b8c436fa014e1989a377caef5a4ba5
import { Link } from 'react-router-dom';



function Item({prenda}) { 
<<<<<<< HEAD
    const {nombre, descripcion, precio, estado, id, imagen} = prenda
    return (
    <>
              <Card style={{ width: '20rem', margin: "2rem" }}>
              <Link to={`/item/${id}`}> <Card.Img variant="top" src={imagen} /> </Link>
=======
    const {nombre, descripcion, precio, estado, id} = prenda
    return (
    <>
              <Card style={{ width: '20rem' }}>
              <Link to={`/item/${id}`}> <Card.Img variant="top" src={logo} /> </Link>
>>>>>>> 841f5d4944b8c436fa014e1989a377caef5a4ba5
        <Card.Body>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
        Descripcion: {descripcion}
        <br />
        Precio: {precio}
        <br />
        Estado: {estado}
    </Card.Text>
    <Link to={`/item/${id}`}> <Button  variant="primary">Ver detalle del producto</Button> </Link>
  </Card.Body>
</Card>
            </>
);
    
    
    
}

  
  export default Item;