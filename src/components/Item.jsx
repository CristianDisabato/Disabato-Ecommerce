import React from "react"
import { Button, Card } from "react-bootstrap"
import { Link } from 'react-router-dom';



function Item({prenda}) { 
    const {nombre, descripcion, precio, estado, id, imagen} = prenda
    return (
    <>
              <Card style={{ width: '20rem', margin: "2rem" }}>
              <Link to={`/item/${id}`}> <Card.Img variant="top" src={imagen} /> </Link>
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