import ItemCount from "../components/ItemCount";

const ItemListContainer =({nombre,descrip})=>{
  const addToCart = (qty) => {

  }
    return(
        <div className="panel panel-default">
  <div className="panel-body">
    {nombre}
  </div>
  <div className="panel-footer">{descrip}</div>
  <ItemCount stock={5} initial={1} onAdd={addToCart}/>
</div>
    )
    }
    export default ItemListContainer;