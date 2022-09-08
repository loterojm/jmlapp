import React from "react";

const ItemDetail = ({ item }) => {
    return(
        <div>
            <img src={item.picture.secure.url} alt={item.title}/>
            <h6>{item.price}</h6>
            <h6>{item.title}</h6>
        </div>
    )
} 
export default ItemDetail