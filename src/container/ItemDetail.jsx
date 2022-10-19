import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../components/ItemCount" 
import { CartContext } from "../components/useContext";

const ItemDetail = ({ item }) => {
    const [add, setAdd] =  useState(false)

    const { addItem } = useContext(CartContext)

    return(
         <div>
            <img src={item.pictures[0].url} alt={item.title} width={200}/>
            <h6>{item.price}</h6>
            <h6>{item.title}</h6>
         
            <img src={item.pictures[0].url} alt={item.title} width={50}/>
            <img src={item.pictures[1].url} alt={item.title} width={50}/>
            <img src={item.pictures[2].url} alt={item.title} width={50}/>
            <img src={item.pictures[3].url} alt={item.title} width={50}/>
            {
          
                <div className="btn btn-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                 </div>
                 
           <div>
            {
            add ?
            <div className="meta">Agregado</div>
                :
            <ItemCount item={item} stock={5} initial={1} addItem={addItem}/>
            }
            </div>
        <Link to="/cart" className="btn btn-secondary">
            Finalizar Compra
        </Link>
        </div>
    )
} 
export default ItemDetail