import React from "react";
import ItemListCont from "../container/ItemListCont"
const Home = () => {
    return (
<div>
<ItemListCont categoryID="celulares" categoryName="celulares"/>
<br/><br/><br/>
<ItemListCont categoryID="autos" categoryName="autos"/>
<br/><br/><br/>
<ItemListCont categoryID="camaras"  categoryName="camaras"/>
</div>
    )
}
export default Home