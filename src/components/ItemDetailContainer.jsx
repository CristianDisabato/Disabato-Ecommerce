import { useEffect, useState } from "react";
import {useParams, Link} from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import {Button, Card} from 'react-bootstrap';
import logo from './logo-buzo.webp';
import './ItemList.css';
import './ItemDetailContainer.css';

function ItemDetailContainer(prenda) {
    const {id} = useParams();

    useEffect(() => {
        if (id === id) {
            console.log(id);
        } 
      },[id])

const [mostrardetalle, setMostrarDetalle] = useState([]);
useEffect(() => {
    const detalle = new Promise ((res, rej) => {
        setTimeout(() => {
            res ([
                { id: '1', descripcion: "Re va con vos" },
            ]);
        }, 2000);
    })
    detalle
    .then(res => setMostrarDetalle(res))
    .catch(error => console.error("Error:", error))
}, []);

<ItemDetail mostrardetalle = {mostrardetalle}/>



return (
<div className="detailmenu">
    <Card style={{ width: '20rem' }}>
    <Link to="/"> <Card.Img variant="top" src={logo} /> </Link>
<Card.Body>
<Card.Title></Card.Title>
<Card.Text>
<h3>Ejemplo</h3>
<br />
<br />

</Card.Text>
<Link to="/"> <Button variant="primary">Comprar</Button> </Link>
</Card.Body>
</Card>
<div>
    <h2>Descripción del producto numero: {id}
    </h2>
    <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero vel ipsam dolorem? Tempora, eos, quam atque molestiae dolorem
    </p>
    <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero vel ipsam dolorem? Tempora, eos, quam atque molestiae dolorem
    </p>
    <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero vel ipsam dolorem? Tempora, eos, quam atque molestiae dolorem
    </p>
    <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero vel ipsam dolorem? Tempora, eos, quam atque molestiae dolorem
    </p>
</div>
    </div>
    
); 



}
export default ItemDetailContainer;

