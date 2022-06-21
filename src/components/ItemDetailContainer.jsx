import { useEffect, useState } from "react";
import {useParams, Link} from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import {Button, Card} from 'react-bootstrap';
import logo from './logo-buzo.webp';
import './ItemList.css';
import './ItemDetailContainer.css';
import {productos} from './stock'
import Loading from "./Loading";

function ItemDetailContainer(prenda) {
    const {id} = useParams();
const [loading, setLoading] = useState(true);

const [mostrardetalle, setMostrarDetalle] = useState({});
const detalle = new Promise ((res) => {
    setTimeout(() => {
        res (productos);
    }, 3500);
});
useEffect(() => {
    
    detalle
    .then(res => setMostrarDetalle(res.find(item => item.id == id)))
    .catch(error => console.error("Error:", error))
    .finally(()=> setLoading(false));
}, []);





return (<>
{loading ? <Loading />: <ItemDetail mostrardetalle = {mostrardetalle}/> }
</>); 



}
export default ItemDetailContainer;

