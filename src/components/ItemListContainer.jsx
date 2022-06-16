import { useEffect, useState } from "react";
import { productos } from "./stock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";

function ItemListContainer() { 
  const {id} = useParams();

  useEffect(() => {
    if (id == id) {
      console.log(id);
    }
  },[id])
  


const [prendas, setPrendas] = useState([])
const promesa = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve(productos)
  }, 2000);
}) 
  useEffect(() => {
    promesa
    .then(res => setPrendas(res))
    .catch(error => console.error("Error:", error))
  }, [])


  return (<>
  
  <ItemList prendas={prendas}/> </>); 

}


export default ItemListContainer;