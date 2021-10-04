import React from "react";
import { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { unContext } from "../../context/unContext";

export const CartWidget = ()=>{
    const {cantidadCarrito}= useContext(unContext)
  return ( 
  <Link to="/carrito">    
  <div>   
      
<FaShoppingCart />
<span>{cantidadCarrito()}</span>

    </div>
  
  </Link>
  )
}