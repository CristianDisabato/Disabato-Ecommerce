import Item from "./Item";

function ItemList(prendas) { 
    return (<>{prendas?.map(prenda => <Item key={prenda.id} prenda={prenda}/>)}</>);  
}

  
  export default ItemList;