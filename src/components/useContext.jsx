import React , {createContext, useState} from "react";



export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState ([{
        id: 1,
        title: "titulo del celular",
        qty: 2
    }])

    const isInCart = (id) =>{
        const found = items.find(item => item.id === id);
        return found;

    }

    const addItem = (item, qty) => {
   isInCart(item.id)
   ?
   setItems(items.map((item) =>{
 if (prod.id === item.id) {
    prod.qty += qty
 }
    return prod
   }))
   :
        setItems ([...items, {id: item.id, name: item.title , price: item.price , qty: qty }])
    }

const removeItem = (id) => {
    setItems (items.filter(item => item.id !== id))
}

const clearItem = () => {
    setItems([])
}

    return (
     
            <CartContext.Provider value={{ items, addItem, removeItem , clearItem}}>
                { children }
            </CartContext.Provider>    
      
    )
}

