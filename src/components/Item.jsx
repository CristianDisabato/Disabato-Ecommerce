import React from "react"
import { Button, Card } from "react-bootstrap"
import logo from "./logo-buzo.webp"
import { Link, useParams } from 'react-router-dom';


function Item({prenda}) { 
    const {nombre, descripcion, precio, estado, stock} = prenda
    return (<>
              <Card style={{ width: '20rem' }}>
              <Link to="/item/:id"> <Card.Img variant="top" src={logo} /> </Link>
        <Card.Body>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
        Descripcion: {descripcion}
        <br />
        Precio: {precio}
        <br />
        Estado: {estado}
    </Card.Text>
    <Link to="/item/:id"> <Button  variant="primary">Ver detalle del producto</Button> </Link>
    <Card.Text>
        Stock disponible: {stock}
    </Card.Text>
  </Card.Body>
</Card>
            </>
    );
    
    
}

  
  export default Item;