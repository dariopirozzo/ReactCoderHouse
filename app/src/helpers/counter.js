import React from "react";
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

               <div className="flex">   

                   <button onClick={handleSumar} className="btn btn-success espacio">+</button>
                   <p>{cantidad}</p>
                   <button onClick={handleRestar} className="btn btn-success espacio">-</button>
               <button className="flex" onClick={agregar} className="btn btn-success espacio">agregar al carrito</button>
               </div>
               
            }
            </div>         
    </>
)

}