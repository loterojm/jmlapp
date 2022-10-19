import React , { useContext } from "react";
import { CartContext }from "../components/useContext";


const Cart = () =>{
    const [ items, removeItem,clearItems ] = useContext(CartContext);
    console.log(items)
    return (
        <div>
               {
                items.map((item)=>(
                    <div key={item.id}>
                    <h3>{item.title} . {item.qty}</h3>
                    <h6 onClick={() => removeItem(item.id)}>borrar item</h6>

                    </div>
                ))
               } 
               <h6 onClick={() => clearItems()}>borrar carrito</h6>
        </div>
    )
}
export default Cart