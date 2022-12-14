import React from "react";
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Navbar from './Navbar';
import ItemListCont from '../container/ItemListCont';
import ItemDetailContainer from '../container/ItemDetailContainer'
import Home from './Home';
import Cart from "../container/Cart";

const Router = () => {
    return (
<>
<BrowserRouter>
    <Navbar/>
    
        <Routes>
           <Route path='/' element={<Home/>} ></Route> 
           <Route path='/category/:categoryID' element={<ItemListCont/>} ></Route>
           <Route path='/item/:id' element={<ItemDetailContainer/>} ></Route> 
           <Route path='/cart' element={<Cart/>} ></Route> 
        </Routes>
</BrowserRouter>
</>
    )
}
export default Router