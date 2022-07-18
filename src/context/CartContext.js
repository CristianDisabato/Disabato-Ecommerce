<<<<<<< HEAD
import React from 'react';
import { createContext, useState, useEffect } from 'react';


export const CartContext = createContext({})



const MyProvider = ({ children }) => {
    
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')):[]) 

    const isInCart = (id) => {
        return cart.some((x) => x.id === id)
    }

    const emptyCart = () => {
        setCart([])
    }

    const addItem = (item, count) => {
        const newItem = {
            ...item,
            count
        }

        if(isInCart(newItem.id)){
            const findProduct = cart.find((x) => x.id === newItem.id)
            const indexProduct = cart.indexOf(findProduct)
            const arrayAux = [...cart]
            arrayAux[indexProduct].count += count
            setCart(arrayAux)
        }else{
            setCart([...cart, newItem])
           
        }
    }

    const deleteItem = (id) => {
        return setCart(cart.filter(x => x.id !== id))
    }

    const getItemCount = () => {
        return cart.reduce((acc, x) => acc += x.count, 0)
    }

    const getItemPrice = () => {
        return cart.reduce((acc, x) => acc += x.count * x.precio, 0)
    }
   
useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
 
  
}, [cart])

    
    return <CartContext.Provider value={{cart, isInCart, emptyCart, addItem, deleteItem, getItemCount, getItemPrice}}>{children}</CartContext.Provider>

}


=======
import { createContext, useState } from "react";

export const CartContext = createContext()

const {Provider} = CartContext;

const MyProvider = ({children}) => {

    const [cart, setCart] = useState()

    const isInCart = (id) => {
        return cart.some(x => x.id === id)
    }
    const addItem = (item, qty) => {
        const newItem ={
            ...item,
            qty
        }

        if (isInCart(newItem.id)) {
            const findProduct = cart.find(x => x.id === newItem.id)
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart]
            auxArray[productIndex].qty += qty
            setCart(auxArray)
        } else{
            setCart([...cart], newItem)
        }
    }
    const emptyCart = () => {
        setCart([])
    }
    const deleteItem = (id) => {
        return setCart(cart.filter(x => x.id !== id))
    }
    const getItemQty = () => {
        return cart.reduce((acc, x) => acc += x.qty, 0)
    }
    const getItemPrice = () => {
        return cart.reduce((acc, x) => acc += x.qty * x.precio, 0)
    }








    return <Provider>{children}</Provider>

}

>>>>>>> 841f5d4944b8c436fa014e1989a377caef5a4ba5
export default MyProvider