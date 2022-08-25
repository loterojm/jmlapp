const ItemListContainer =({nombre,descrip})=>{
    return(
        <div className="panel panel-default">
  <div className="panel-body">
    {nombre}
  </div>
  <div className="panel-footer">{descrip}</div>
</div>
    )
    }
    export default ItemListContainer;