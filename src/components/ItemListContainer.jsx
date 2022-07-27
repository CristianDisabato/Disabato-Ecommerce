import { useEffect, useState } from "react";
import { productos } from "./stock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemDetail from './ItemDetail';
import Loading from "./Loading";

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";



  function ItemListContainer() {
    const [loading, setLoading] = useState(true);
    const [prendas, setPrendas] = useState([]);
    const { id } = useParams();
  
    useEffect(() => {
      const db = getFirestore(); // obtenemos la base de datos
      const itemsCollection = collection(db, "productos"); // obtenemos la colección
  
      if (id) {
        const q = query(itemsCollection, where("categoria", "==", id));
         // obtenemos el query
        getDocs(q).then((snapshot) => {
          // obtenemos los documentos
          setPrendas(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          ); // seteamos el estado
        });
      } else {
        getDocs(itemsCollection).then((snapshot) => {
          // obtenemos los documentos
          setPrendas(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          ); // seteamos el estado
        });
      }
    }, [id]);


  return (<>
      <ItemList prendas={prendas}/>
    </>); 

}


export default ItemListContainer;