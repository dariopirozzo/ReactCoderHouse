import React from "react";
import {Link} from 'react-router-dom';
import { CartWidget } from "../cartWidget/cartWidget";

export const NavBar = () => {

  return (

    <div className="container"> 
    <header className=" logo">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <h1 className="espacio">logo</h1>
       <Link to={"/"} className="btn btn-primary espacio">inicio</Link>
       <Link to={"/category/calzado"} className="btn btn-primary espacio">calzado</Link>
       <Link to={"/category/abrigos"} className="btn btn-primary espacio">abrigos</Link>
      </nav>
     <CartWidget/>
    </header>

    </div>
  );
};
