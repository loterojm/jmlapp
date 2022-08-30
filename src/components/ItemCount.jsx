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
        </div>
    </div>
    )
    }
    export default ItemCount;