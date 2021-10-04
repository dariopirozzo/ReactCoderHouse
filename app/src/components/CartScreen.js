import React, { useContext } from "react";
import { unContext } from "../context/unContext";
import {BsFillTrashFill} from 'react-icons/bs'

export const CartScreen = () => {
    const {carrito, eliminarDelCarrito, vaciarCarrito}= useContext(unContext)

    return(
        <div>   
            <h1>resumen de compra</h1>
            {
                carrito.map(prod =>(
            <div key={prod.id}> 
                <h3>{prod.nombre}</h3>
                <h3>cantidad: {prod.cantidad}</h3>
                <h3>precio: ${prod.precio * prod.cantidad}</h3>
                <BsFillTrashFill onClick={()=>eliminarDelCarrito(prod.id)}/>
            </div>
                ))}
                <hr/>
                <div className="btn btn-danger" onClick={vaciarCarrito}>vaciar carrito</div>
        </div>
    )
}