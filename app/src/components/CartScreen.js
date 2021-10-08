import React, { useContext } from "react";
import { unContext } from "../context/unContext";
import {BsFillTrashFill} from 'react-icons/bs'
import { Link } from "react-router-dom";

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
                <button className="btn btn-danger"><BsFillTrashFill onClick={()=>eliminarDelCarrito(prod.id)}/> </button>
                
            </div>
                ))}
                <hr/>
                <div className="btn btn-danger" onClick={vaciarCarrito}>vaciar carrito</div>
                <Link to="/checkout"> <button className="btn btn-success mx-3"> terminar mi compra </button> </Link>
        </div>
    )
}