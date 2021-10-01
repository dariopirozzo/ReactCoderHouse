import React from "react";
import { Link } from "react-router-dom";


export const ItemDetail = ({id, category, nombre, precio, img}) =>{


    return (
        <div>   
            <h2>    detalle del producto </h2>
            <h2>    {nombre}</h2>
            <h2> precio : {precio}</h2>
            <img src={img}></img>
        </div>
    )
}