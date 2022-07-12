import { useEffect, useState } from "react";
import './ItemCount.css';
import { Button, Stack } from 'react-bootstrap';

function ItemCount({maxstock, initialstock, onAdd}) { 
    const [c, setc] = useState(0);
    
    useEffect(() => {
        if (c >= maxstock) {
            alert("No hay mas stock disponible");
        }
        
    }, [c]);



    return  (
    <>
    <Stack direction="horizontal mx-auto">
    <div>
        <p className="pstock"> LLEVANDO {c} PRODUCTOS </p>
        <br />
        <div className="mx-auto buttoncenter">
        <Button  variant="primary" className="buttonadd" onClick={() => {
            setc(c + 1);
        }}>
            Agregar
            </Button>
            <Button  variant="primary" className="buttonrest" onClick={() => {
            setc(c - 1);
        }}>
            Quitar
            </Button>
            <Button  variant="primary" className="buttoncarrito" onClick={() => {
            onAdd(c)
        }}>
            Añadir al carrito
            </Button>
            </div>
    </div>
    </Stack>
    </>)
}

  
  export default ItemCount;