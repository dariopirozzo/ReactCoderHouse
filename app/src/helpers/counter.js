import React,{ useState } from "react";
import { Link } from "react-router-dom";

export const Counter = ({max, cantidad, setCantidad,agregar,agregado}) =>{
console.log(agregado)
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
           {
               agregado 
               ?  <Link to="/carrito" className="btn btn.success">terminar compra</Link>
               : 

               <div>   

                   <button onClick={handleSumar}>+</button>
                   <p>{cantidad}</p>
                   <button onClick={handleRestar}>-</button>
               <button className="flex" onClick={agregar}>agregar al carrito</button>
               </div>
               
            }
            </div>         
    </>
)

}