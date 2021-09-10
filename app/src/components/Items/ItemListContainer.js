import React, { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";

import {ItemList} from "../Items/itemList";


export const Items = ({ greeting }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    pedirDatos()
      .then((res) => setData(res))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  
  return <>
  {loading ? <p>loading..</p> 

    : <ItemList data={data}/>
  }</>;
};
