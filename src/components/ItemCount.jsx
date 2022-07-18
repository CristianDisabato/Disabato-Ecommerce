import { useEffect, useState } from "react";
import './ItemCount.css';
<<<<<<< HEAD
import { Button, Stack } from 'react-bootstrap';
=======
import { Button } from 'react-bootstrap';
>>>>>>> 841f5d4944b8c436fa014e1989a377caef5a4ba5

function ItemCount({maxstock, initialstock, onAdd}) { 
    const [c, setc] = useState(0);
    
    useEffect(() => {
        if (c >= maxstock) {
            alert("No hay mas stock disponible");
        }
        
    }, [c]);



    return  (
    <>
<<<<<<< HEAD
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
=======

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
>>>>>>> 841f5d4944b8c436fa014e1989a377caef5a4ba5
    </>)
}

  
  export default ItemCount;