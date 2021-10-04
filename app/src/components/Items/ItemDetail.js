import React, {useState, useContext} from "react";
import { unContext } from "../../context/unContext";
import { Counter } from "../../helpers/counter";


export const ItemDetail = ({id, category, nombre, precio, img, stock}) =>{

const {agregarAlCarrito}= useContext(unContext)

const [cantidad, setCantidad]= useState(1)

const handleAdd = ()=>{
agregarAlCarrito({
    category, id, nombre, img, precio, cantidad
})

}

    return (
        <div>   
            <h2>    detalle del producto </h2>
            <h2>    {nombre}</h2>
            <h2> precio : {precio}</h2>
           <Counter max={stock} cantidad={cantidad} setCantidad={setCantidad} agregar={handleAdd}/>
            <img src={img}></img>
        </div>
    )
}