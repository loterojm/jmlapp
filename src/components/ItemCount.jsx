import { useState } from "react";

const ItemCount =({ stock, initial, onAdd })=>{
    const [qty, setQty] = useState(initial);
    const sumaQty =() => {
        if (qty < stock) {
            setQty(qty + 1);
        }
    }
    const restaQty =() => {
        if (qty > 0 ){
            setQty(qty - 1);
        }
    }
    return(
    <div>
        <div className="btn-group btn-group-toggle">
            <div  className="btn btn-outline-danger" onClick={restaQty}>-</div>
            <div style={{width:"50px", textAlign:"center"}}>{qty}</div>
            <div class="btn btn-outline-success" onClick={sumaQty}>+</div>
        {
            qty > 0?
            <div className="btn btn-outline-secondary" onClick={()=> onAdd(qty) }>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
                Agregar al carrito
            </div>
            :
            <div className="btn btn-outline-secondary disabled">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
                Agregar al carrito
            </div>
        }
           </div>
    </div>
    )
    }
    export default ItemCount;