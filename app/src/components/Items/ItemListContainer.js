import React, { useEffect, useState, useContext } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import { useParams } from "react-router-dom";
import { ItemList } from "../Items/itemList";
import { unContext } from "../../context/unContext";

export const Items = () => {

  const { catId } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    pedirDatos()

      .then((res) => {
        if(catId){
          const arrayFiltrado = res.filter((prod) => prod.category === catId);
          setData(arrayFiltrado);
}
else {
  setData(res)
}
      })

      .finally(() => {
        setLoading(false);
      });
  }, [catId]);

  return <>{loading ? <p>loading..</p> : <ItemList data={data} />}</>;
};
