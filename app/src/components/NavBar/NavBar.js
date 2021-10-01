import React from "react";
import {Link} from 'react-router-dom';

export const NavBar = () => {

  return (
    <header className="logo">
      <nav>
       <Link to={"/"}>inicio</Link>
       <Link to={"/nosotros"}>nosotros</Link>
       <Link to={"/carrito"}>Carrito</Link>
       <Link to={"/category/calzado"}>calzado</Link>
       <Link to={"/category/remeras"}>remeras</Link>
       <Link to={"/category/abrigos"}>abrigos</Link>
      </nav>
    </header>
  );
};
