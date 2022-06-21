import { useEffect, useState } from "react";
import './ItemCount.css';
import { Button } from 'react-bootstrap';

function ItemCount({maxstock, initialstock, onAdd}) { 
    const [c, setc] = useState(0);
    
    useEffect(() => {
        if (c >= maxstock) {
            alert("No hay mas stock disponible");
        }
        
    }, [c]);



    return  (
    <>

    <div>
        <p className="pstock"> LLEVANDO: {c} PRODUCTOS </p>
        <br />
        <Button  variant="success" className="buttonadd" onClick={() => {
            setc(c + 1);
        }}>
            AÑADIR
            </Button>
            <Button  variant="danger" className="buttonrest" onClick={() => {
            setc(c - 1);
        }}>
            QUITAR
            </Button>
            <Button  variant="info" className="buttoncarrito" onClick={() => {
            onAdd(c)
        }}>
            AÑADIR AL CARRITO
            </Button>
    </div>
    </>)
}

  
  export default ItemCount;