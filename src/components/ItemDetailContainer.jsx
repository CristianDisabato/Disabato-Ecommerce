import { useEffect, useState } from "react";
import {useParams, Link} from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import {Button, Card} from 'react-bootstrap';
import './ItemList.css';
import './ItemDetailContainer.css';
import {productos} from './stock'
import Loading from "./Loading";
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





return (<>
{loading ? <Loading />: <ItemDetail mostrardetalle = {mostrardetalle}/> }
</>); 



}
export default ItemDetailContainer;

