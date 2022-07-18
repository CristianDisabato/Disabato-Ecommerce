import { useEffect, useState } from "react";
import { productos } from "./stock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemDetail from './ItemDetail';
<<<<<<< HEAD
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
=======
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
>>>>>>> 841f5d4944b8c436fa014e1989a377caef5a4ba5
    </>); 

}


export default ItemListContainer;