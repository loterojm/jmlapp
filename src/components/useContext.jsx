import React , {createContext, useState} from "react";



export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState ([{
        id: 1,
        title: "titulo del celular",
        qty: 2
    }])

    const isInCart = (id) =>{

    }
    const addItem = (id , item, qty) => {
   
        setItems ([...items, { ...item, qty: qty }]);
    }

    return (
     
            <CartContext.Provider value={{ items, addItem}}>
                { children }
            </CartContext.Provider>    
      
    )
}

