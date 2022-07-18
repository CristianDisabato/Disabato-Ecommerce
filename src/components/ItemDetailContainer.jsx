import { useEffect, useState } from "react";
import {useParams, Link} from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import {Button, Card} from 'react-bootstrap';
<<<<<<< HEAD
=======
import logo from './logo-buzo.webp';
>>>>>>> 841f5d4944b8c436fa014e1989a377caef5a4ba5
import './ItemList.css';
import './ItemDetailContainer.css';
import {productos} from './stock'
import Loading from "./Loading";
<<<<<<< HEAD
import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDetailContainer() {
const {id} = useParams();
const [loading, setLoading] = useState(true);



const [mostrardetalle, setMostrarDetalle] = useState({});

useEffect(() => {
    const db = getFirestore();
    const productFound = doc(db, "productos", id);
    getDoc(productFound).then((res)=>{
      if(res.exists()){
          console.log(res.data())
          setMostrarDetalle({...res.data(), id: res.id})
          setLoading(false);
      }else{
          alert("No se encontro el producto")
      }
    })
  }, [id])
=======

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
>>>>>>> 841f5d4944b8c436fa014e1989a377caef5a4ba5





return (<>
{loading ? <Loading />: <ItemDetail mostrardetalle = {mostrardetalle}/> }
</>); 



}
export default ItemDetailContainer;

