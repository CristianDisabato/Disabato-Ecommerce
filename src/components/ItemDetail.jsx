function ItemDetail(mostrardetalle) { 
    return (mostrardetalle.map((mostrardetalle) => (
        <>
          <p>id: {mostrardetalle.id}</p>
          <p>Descrpcion: {mostrardetalle.descripcion}</p>
        </>
      )));
}

  
  export default ItemDetail;