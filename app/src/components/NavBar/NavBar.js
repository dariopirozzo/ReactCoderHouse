import React from "react";
import {Link} from 'react-router-dom';

export const NavBar = () => {

  return (
    <header className="logo">
      <nav>
       <Link to={"/items"}>items</Link>
       <Link to={"/nosotros"}>nosotros</Link>
       <Link to={"/carrito"}>Carrito</Link>
      </nav>
    </header>
  );
};
