
import React ,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../container/ItemDetail";




  const ItemDetailContainer =() => {
    const [item,setItem] = useState ({})
    const [loading, setLoading] = useState(true)
    const params = useParams ()

    useEffect(() => {
        setTimeout(() => {
        fetch(`https://api.mercadolibre.com/items/${params.id}`)
        .then ((response) => response.json())
        .then (respJSON =>{ console.log(respJSON);setItem(respJSON);setLoading(false) } )
        .cath (error => console.log('error:',error))
    },0 )
},[params.id] )
  
    return(
        <div>
  {
                loading ?
                <h5>Cargando producto</h5>
                :
                
                    <div>
                        <h6><ItemDetail item={item}/></h6>   
                    </div>
                
    }
     </div>
    )
}
export default ItemDetailContainer;