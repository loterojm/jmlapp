import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

const ItemList = ({ textodebusqueda }) => {
    const [carrito, setCarrito] = useState([])
    const [productos, setProductos] = useState([])

    const BuscarProductos = async () => {
        try {
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=iphone`)
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
                        <Link to={`/item/${producto.id}`}>
                        <a>
                        <img src={producto.thumbnail} />
                        </a>
                        </Link>
                        <h6>{producto.title}</h6>
                        Precio <h5>{producto.price}</h5>
                        <Item stock={5} initial={1} key={producto.id} />
                        
                        
                    </div>
                )
            })}
        </div>
    )
}
export default ItemList;