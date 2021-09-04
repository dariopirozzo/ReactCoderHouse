import React, { useEffect, useState } from "react";
import { llamar } from "../../helpers/pedirDatos";
import { mostrarArray } from "./mostrarArray";

export const Items = ({ greeting }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    llamar()
      .then((res) => setData(res))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  
  return <>{loading ? <p>loading..</p> 

    :   <mostrarArray prod={data}/>
  }</>;
};
