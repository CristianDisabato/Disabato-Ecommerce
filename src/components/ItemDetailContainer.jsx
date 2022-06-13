import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
function ItemDetailContainer() {
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


return;  



}
export default ItemDetailContainer;

