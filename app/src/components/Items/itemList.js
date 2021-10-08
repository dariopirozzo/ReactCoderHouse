import React from "react";
import { Link } from "react-router-dom";
export const ItemList = ({ data }) => {
  return (
    <div className="container my-5">

      <div className="row"> 
      <h2>productos</h2>
      <hr />
      { <div className="row">
        {data.map((stock) => (
          <div key={stock.id} className="card col-4">
            <img src={stock.img} alt={stock.nombre} />
            <h3>{stock.nombre}</h3>
            <p>{stock.precio}</p>
           <Link to={`/detail/${stock.id}`} ><button className="btn btn-success">ver mas !</button></Link>
          </div>
        ))}
      </div> }
      </div>
    </div>
  );
};
