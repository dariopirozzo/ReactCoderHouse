import { createContext } from "react";
import { useState } from "react";

//creacion del contexto
export const unContext = createContext()

// custom provider

export const CartProvider = ({children})=>{
    const [carrito, setCarrito] = useState([])
    const agregarAlCarrito=(prod)=> {
      setCarrito([
        ...carrito,
        prod
      ])
    }
    const eliminarDelCarrito = (id) => {
    
    setCarrito(carrito.filter(prod=> prod.id !==id))
    }
    const cantidadCarrito = ()=>{
      return carrito.reduce((acc, prod)=> acc + prod.cantidad,0)
    }
    
    const vaciarCarrito = () => {
      setCarrito([])
    }
    const isInCart =(id)=>{
            return carrito.some(el => el.id == id)
    }

    
    return (
<unContext.Provider value={{carrito, agregarAlCarrito,eliminarDelCarrito,cantidadCarrito,vaciarCarrito, isInCart}}>    
{children}
</unContext.Provider>

    )
}