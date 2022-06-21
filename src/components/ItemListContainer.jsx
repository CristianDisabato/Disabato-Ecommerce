import { useEffect, useState } from "react";
import { productos } from "./stock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemDetail from './ItemDetail';
import Loading from './Loading';

function ItemListContainer() { 
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  


const [prendas, setPrendas] = useState([])
const promesa = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve(productos)
  }, 3500);
}) 
  useEffect(() => {
    promesa
    .then(res => setPrendas(res))
    .catch(error => console.error("Error:", error))
    .finally(()=> setLoading(false));
  }, [])


  return (<>
    {loading ? <Loading />: <ItemList prendas={prendas}/> }
    </>); 

}


export default ItemListContainer;