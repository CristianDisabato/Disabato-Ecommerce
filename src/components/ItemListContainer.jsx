import { useEffect, useState } from "react";
import { productos } from "./stock";
import ItemList from "./ItemList";

function ItemListContainer() { 
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

  console.log(prendas);

  return (<>
  <ItemList prendas={prendas}/> </>);  
}


export default ItemListContainer;