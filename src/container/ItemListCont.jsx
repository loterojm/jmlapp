import { useEffect, useState } from "react";
import ItemCount from "../components/ItemCount";

const ItemList = ({ textodebusqueda }) => {
    const [carrito, setCarrito] = useState([])
    const [productos, setProductos] = useState([])

    const BuscarProductos = async () => {
        try {
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=celulares`)
            const data = await response.json();
            setProductos(data.results);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        BuscarProductos()
    }, [textodebusqueda])
    console.log(productos)
    console.log("llego ok");

    return (
        <div>
            {productos.map((producto) => {
                return (
                    <div>
                        <img src={producto.thumbnail} />
                        <h6>{producto.title}</h6>
                        <ItemCount stock={5} initial={1} key={producto.id} />
                    </div>
                )
            })}
        </div>
    )
}
export default ItemList;