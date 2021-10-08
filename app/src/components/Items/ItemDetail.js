import React, {useState, useContext} from "react";
import { unContext } from "../../context/unContext";
import { Counter } from "../../helpers/counter";


export const ItemDetail = ({id, category, nombre, precio, img, stock}) =>{

const {agregarAlCarrito, isInCart}= useContext(unContext)

const [cantidad, setCantidad]= useState(1)

const handleAdd = ()=>{
agregarAlCarrito({
    category, id, nombre, img, precio, cantidad
})

}

    return (
        <>
        <h2 className="espacio">    detalle del producto </h2>
        <div className="container flex">   
        <div>   
            <h2>    {nombre}</h2>
            <h2> precio : {precio}</h2>

        </div>
           <Counter className=""
           max={stock} 
           cantidad={cantidad} 
           setCantidad={setCantidad} 
           agregar={handleAdd} 
           agregado={isInCart(id)}/>
            <img src={img} ></img>
        </div>
           </>
    )
}