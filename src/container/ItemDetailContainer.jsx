import { useEffect, useState } from "react";
import Item from "../components/ItemDetailContainer";

const ItemDetailContainer = () => {
    const [item, setITem] = useState([])
    const [loading, setLoading] = useState([true])
    const params = useParams()

    
    useEffect(() => {
        setTimeout (() => {
        fetch(`https://api.mercadolibre.com/items/${params.id}`)    
        .them((response) => response.json())
        .them(respJSON =>{console.log(respJSON); setITem (respJSON);setLoading(false)})
    },0)
    },[params.id])

    return (
        <>
        {
            loading?
            <h6>Cargando ...</h6>
            :
            <div>
                <ItemDetail item={item}/>
            </div>

        }
    )
}
export default ItemDetailContainer;