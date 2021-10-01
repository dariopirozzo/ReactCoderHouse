import React from "react";
import { Link } from "react-router-dom";
export const ItemList = ({ data }) => {
  return (
    <div className="flex">
      <h2>productos</h2>
      <hr />
      { <div>
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
  );
};
