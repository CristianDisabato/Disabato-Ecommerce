import Item from "./Item";
import './ItemList.css';


function ItemList({prendas}) { 
    return (<div className="itemlist">{prendas?.map(prenda => <Item key={prenda.id} prenda={prenda}/>)}</div>);  
}

  
  export default ItemList;