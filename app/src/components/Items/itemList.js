import React from "react";

export const itemList = ({ productos }) => {
  return (
    <div className="flex">
      <h2>productos</h2>
      <hr />
      <div>
        {productos.map((stock) => (
          <li key={stock.id}>
            <img src={stock.img} alt={stock.nombre} />
            <h3>{stock.nombre}</h3>
            <p>{stock.precio}</p>|
          </li>
        ))}
      </div>
    </div>
  );
};
