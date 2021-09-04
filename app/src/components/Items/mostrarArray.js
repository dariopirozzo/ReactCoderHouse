import React from "react";

export const mostrarArray = ({ prod }) => {
  return (
    <div className="flex">
      <h2>productos</h2>
      <hr />
      <div>
        {prod.map((stock) => (
          <li>
            <img src={stock.img} alt={stock.nombre} />
            <h3>{stock.nombre}</h3>
            <p>{stock.precio}</p>|
          </li>
        ))}
      </div>
    </div>
  );
};
