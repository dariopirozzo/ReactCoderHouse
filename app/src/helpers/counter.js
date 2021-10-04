import React,{ useState } from "react";

export const Counter = ({max, cantidad, setCantidad,agregar}) =>{

const handleSumar = () =>{
    if (cantidad < max){
        setCantidad(cantidad + 1)


    }
}
const handleRestar = () =>{

    if (cantidad > 1){
        setCantidad(cantidad - 1)


    }
}
return (
    <>
    <div>   

        <button onClick={handleSumar}>+</button>
        <p>{cantidad}</p>
        <button onClick={handleRestar}>-</button>
    </div>
    <button className="flex" onClick={agregar}>agregar al carrito</button>
    </>
)

}