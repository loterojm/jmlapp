import React from "react";

const ItemDetail = ({ item }) => {
    return(
        <div>
            <img src={item.pictures[0].secure.url} alt={item.title} width={300}/>
            <h6>{item.price}</h6>
            <h6>{item.title}</h6>
        </div>
    )
} 
export default ItemDetail