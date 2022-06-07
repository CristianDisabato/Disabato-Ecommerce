import { useEffect, useState } from "react";
import './ItemCount.css';

function ItemCount({maxstock, initialstock}) { 
    const [c, setc] = useState(0);
    
    useEffect(() => {
        if (c >= maxstock) {
            alert("No hay mas stock disponible");
        }
        
    }, [c]);



    return  (
    <>
    <div>
        <h1>Camisa Lacoste</h1>
        <p className="pstock"> LLEVANDO: {c} CAMISA LACOSTE </p>
        <br />
        <button className="buttonadd" onClick={() => {
            setc(c + 1);
        }}>
            AÑADIR
        </button>
        <button className="buttonrest" onClick={() => {
            setc(c - 1);
        }}>
            QUITAR
        </button>
        <button className="buttoncarrito" onClick={() => {
            alert("Añadido al carrito")
        }}>
            AÑADIR AL CARRITO
        </button>
    </div>
    </>)
}

  
  export default ItemCount;