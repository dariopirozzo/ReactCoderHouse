import React from "react";
import { Link } from "react-router-dom";
export const ItemList = ({ data }) => {
  return (
    <div className="container my-5">

      <div className="row"> 
      <h2>productos</h2>
      <hr />
      { <div className="">
        {data.map((stock) => (
          <li key={stock.id}>
            <img src={stock.img} alt={stock.nombre} />
            <h3>{stock.nombre}</h3>
            <p>{stock.precio}</p>
           <Link to={`/detail/${stock.id}`}>vermas</Link>
          </li>
        ))}
      </div> }
      </div>
    </div>
  );
};
