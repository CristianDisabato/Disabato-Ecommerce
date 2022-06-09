import React from "react"
import { Button, Card } from "react-bootstrap"
function Item({prenda}) { 
    const [ nombre, descripcion, precio, estado, stock ] = prenda
    return (<>
              <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
        Descripcion: {descripcion}
        <br />
        Precio: {precio}
        <br />
        Estado: {estado}
    </Card.Text>
    <Button variant="primary">Ver detalle del producto</Button>
    <Card.Text>
        Stock disponible: {stock}
    </Card.Text>
  </Card.Body>
</Card>
            </>
    );  
}

  
  export default Item;